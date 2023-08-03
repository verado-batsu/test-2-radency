import React from 'react';
import { chooseIcon, limit } from '../../../helpers';

import { ITodoItem } from '../../../types';
import { icons } from '../../../assets/images/tablePage';

import styles from '../Item.module.scss';
import { useAppDispatch } from '../../../hooks';
import { deleteTodo } from '../../../redux/todos/todosSlice'
import { addArchiveTodo } from '../../../redux/archiveTodos/archiveTodosSlice';

const {
	tableItem,
	tableRow,
	tableRowItem,
	iconWrapper,
	tableIcon,
	btnEdit,
	btnArchive,
	btnDelete,
	btnIcon
} = styles;

interface IProps {
	key: string,
	todo: ITodoItem,
	type: string,
	openModal: () => void,
	setEditId: (id: string) => void
}

export const TodoItem: React.FC<IProps> = ({ todo, type, openModal, setEditId }) => {
	const dispatch = useAppDispatch();
	const icon = chooseIcon(todo.category);

	function deleteNote() {
		dispatch(deleteTodo(todo.id))
	}

	function archiveTodo() {
		dispatch(addArchiveTodo(todo))
		dispatch(deleteTodo(todo.id))
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
					{type === "todos" && <button onClick={() => {
						openModal()
						setEditId(todo.id)
					}} className={btnEdit} type="button">
						<svg className={btnIcon} width="24" height="24">
							<use href={`${icons}#icon-edit`}></use>
						</svg>
					</button>}
					<button onClick={archiveTodo} className={btnArchive} type="button">
						<svg className={btnIcon} width="24" height="24">
							<use href={`${icons}#icon-archive`}></use>
						</svg>
					</button>
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