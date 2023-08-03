import React from 'react';
import { chooseIcon, limit } from '../../../helpers';

import { ITodoItem } from '../../../types';
import { icons } from '../../../assets/images/tablePage';

import styles from '../Item.module.scss';
import { useAppDispatch } from '../../../hooks';
import { addTodo, deleteTodo } from '../../../redux/todos/todosSlice'
import { addArchiveTodo, deleteArchiveTodo } from '../../../redux/archiveTodos/archiveTodosSlice';

const {
	tableItem,
	tableRow,
	tableRowItem,
	iconWrapper,
	tableIcon,
	btnEdit,
	btnArchive,
	btnDelete,
	btnUnarchive,
	btnIcon
} = styles;

interface IProps {
	key: string,
	todo: ITodoItem,
	type: 'todos' | 'summary' | 'archiveTodos',
	openModal: () => void,
	setEditId: (id: string) => void
}

export const TodoItem: React.FC<IProps> = ({ todo, type, openModal, setEditId }) => {
	const dispatch = useAppDispatch();
	const icon = chooseIcon(todo.category);

	function deleteNote() {
		if (type === "todos") {
			dispatch(deleteTodo(todo.id))
		} else {
			dispatch(deleteArchiveTodo(todo.id))
		}
		
	}

	function archiveTodo() {
		dispatch(addArchiveTodo(todo))
		dispatch(deleteTodo(todo.id))
	}

	function unarchiveTodo() {
		dispatch(addTodo(todo))
		dispatch(deleteArchiveTodo(todo.id))
	}

	return (
		<li className={tableItem}>
			<ul className={tableRow}>
				<li className={tableRowItem}>
				<div className={iconWrapper}>
					<svg className={tableIcon} width="24" height="24">
						<use href={icon}></use>
					</svg>
				</div>
				<span>{limit(todo.name, 25)}</span>
				</li>
				<li className={tableRowItem}>{todo.created}</li>
				<li className={tableRowItem}>{todo.category}</li>
				<li className={tableRowItem}>
					{limit(todo.content, 30)}
				</li>
				<li className={tableRowItem}>{todo.dates}</li>
				<li className={tableRowItem}>
					{type === "todos" &&
						(
							<button
								onClick={() => {
									openModal()
									setEditId(todo.id)
								}}
								className={btnEdit}
								type="button"
							>
								<svg className={btnIcon} width="24" height="24">
									<use href={`${icons}#icon-edit`}></use>
								</svg>
							</button>
						)
					}
					{type === "todos" ? 
						(
							<button onClick={archiveTodo} className={btnArchive} type="button">
								<svg className={btnIcon} width="24" height="24">
									<use href={`${icons}#icon-archive`}></use>
								</svg>
							</button>
						) :
						(
							<button onClick={unarchiveTodo} className={btnUnarchive} type="button">
								<svg className={btnIcon} width="24" height="24">
									<use href={`${icons}#icon-unarchive`}></use>
								</svg>
							</button>
						)
					}
					<button onClick={deleteNote} className={btnDelete} type="button">
						<svg className={btnIcon} width="24" height="24">
							<use href={`${icons}#icon-delete`}></use>
						</svg>
					</button>
				</li>
			</ul>
		</li>
	)
}