import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { icons } from '../../assets/images/tablePage';
import { TodoItem } from '../TableItem/TodoItem/TodoItem';
import { SummaryItem } from '../TableItem/SummaryItem/SummaryItem';

import styles from './Table.module.scss';
import { calculateStatistic, findDateInText } from '../../helpers';
import { changeSummary } from '../../redux/summary/summarySlice';
import { ISummaryItem, ITodoItem } from '../../types';
import { Modal } from '../Modal/Modal';
import { addTodo, editTodo } from '../../redux/todos/todosSlice';

const {
	mainTable,
	table,
	tableItemHead,
	tableRow,
	tableRowItem,
	tableIcon,
	btnWrapper,
	createNoteBtn,
	toggleArchiveBtn,
	statisticTable
} = styles;

const TodoTitleArr: Readonly<string[]> = ['Name', 'Created', 'Category', 'Content', 'Dates']

const SummaryTitleArr: Readonly<string[]> = ['Note Category', 'Active', 'Archived']

interface IProps {
	typeOfTable: 'todos' | 'summary' | 'archiveTodos'
}

export const Table: React.FC<IProps> = ({ typeOfTable }) => {
	const dispatch = useAppDispatch();

	const [showModal, setShowModal] = useState<boolean>(false);
	const [editId, setEditId] = useState<string | null>(null);

	const data = useAppSelector(state => state[typeOfTable]);

	useEffect(() => {
		if (typeOfTable === 'summary') {
			return;
		}
		const statistic = calculateStatistic(data as ITodoItem[], typeOfTable)
		dispatch(changeSummary(statistic))
	}, [data, dispatch, typeOfTable])

	function openModal() {
		setShowModal(true)
	}

	function closeModal() {
		setShowModal(false)
	}

	function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>, editTodo: ITodoItem | undefined) {
		e.preventDefault()
		if (!editTodo) {
			createNote(e)
		} else {
			editNote(e, editTodo)
		}
		e.currentTarget.reset()
		closeModal()
	}

	function createNote(e: React.SyntheticEvent<HTMLFormElement>) {
		const {name, categories, content} = e.target as typeof e.target & {
			name: { value: string };
			categories: { value: string };
			content: { value: string };
		};

		if (name.value.trim() === '' || content.value.trim() === '') {
			Notify.failure('Fields must not be empty');
			return;
		}
		const date = new Date()
		const formatDate = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

		const dates = findDateInText(content.value)

		const newTodo = {
		id: nanoid(),
		name: name.value,
		created: formatDate,
		category: categories.value,
		content: content.value,
		dates,
		}
		dispatch(addTodo(newTodo))
	}

	function editNote(e: React.SyntheticEvent<HTMLFormElement>, editedTodo: ITodoItem) {
		const {name, categories, content} = e.target as typeof e.target & {
			name: { value: string };
			categories: { value: string };
			content: { value: string };
		};

		if (name.value.trim() === '' || content.value.trim() === '') {
			Notify.failure('Fields must not be empty');
			return;
		}

		const dates = findDateInText(content.value)

		const newEditedTodo = {
			id: editedTodo.id,
			name: name.value,
			created: editedTodo.created,
			category: categories.value,
			content: content.value,
			dates,
		}

		dispatch(editTodo(newEditedTodo))
	}

	return (
		<>
			{showModal && <Modal
				editId={editId}
				closeModal={closeModal}
				handleSubmit={handleSubmit}
			/>}
			<div className={typeOfTable === "todos" || typeOfTable === "archiveTodos" ? mainTable : statisticTable}>
				<ul className={table}>
					<li className={tableItemHead}>
						<ul className={tableRow}>
							{ typeOfTable === "todos" || typeOfTable === "archiveTodos" ?
							<>
								{TodoTitleArr.map(title => {
									return <li key={title} className={tableRowItem}>{title}</li>
								})}
								<li className={tableRowItem}>
									<svg className={tableIcon} width="24" height="24">
										<use href={`${icons}#icon-archive`}></use>
									</svg>
									<svg className={tableIcon} width="24" height="24">
										<use href={`${icons}#icon-delete`}></use>
									</svg>
								</li>
							</>
							: <>
							 	{SummaryTitleArr.map(title => {
									return <li key={title} className={tableRowItem}>{title}</li>
								})}
							 </>
						}
						</ul>
					</li>
					<ul>
						{typeOfTable === "todos" &&
							<>
							{data.map((todo) => {
									const item = todo as ITodoItem
								return <TodoItem
									key={item.id}
									todo={item}
									type={typeOfTable}
									openModal={openModal}
									setEditId={setEditId}
								/>
								})}
							</>
						}
						
						{typeOfTable === "summary" &&
							<>
								{data.map(summary => {
									return <SummaryItem key={summary.category} summary={summary as ISummaryItem} />
								})}
							</>
						}
						
					</ul>
				</ul>
				{typeOfTable !== "summary" &&
					<div className={btnWrapper}>
						<button className={createNoteBtn} type="button" onClick={() => openModal()}>Create Note</button>
						<button className={toggleArchiveBtn} type="button">Show Archive</button>
					</div>
				}
			</div>
		</>
	)
}