import React from 'react';

import { useAppSelector } from '../../hooks';

import { icons } from '../../assets/images/tablePage';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

const {
	mainTable,
	table,
	tableItemHead,
	tableRow,
	tableRowItem,
	tableIcon,
	btnWrapper,
	createNoteBtn,
	toggleArchiveBtn
} = styles;

const TitleArr: Readonly<string[]> = ['Name', 'Created', 'Category', 'Content', 'Dates']

export const TodoList: React.FC = () => {
	const todos = useAppSelector(state => state.todos)

	console.log(todos)

	return (
		<div className={mainTable}>
			<ul className={table}>
				<li className={tableItemHead}>
						<ul className={tableRow}>
							{TitleArr.map(title => {
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
					</ul>
				</li>
				<ul>
					{todos.map(todo => {
						return <TodoItem key={todo.id} todo={todo} />
					})}
				</ul>
			</ul>
			<div className={btnWrapper}>
				<button className={createNoteBtn} type="button">Create Note</button>
				<button className={toggleArchiveBtn} type="button">Show Archive</button>
			</div>
		</div>
	)
}