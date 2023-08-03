import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Form from 'react-bootstrap/Form';

import styles from './Modal.module.scss'
import { useAppSelector } from '../../hooks';
import { ITodoItem } from '../../types';

const {
	modalWrapper,
	modal,
	closeBtn,
	modalForm,
	formLabel,
	labelTitle,
	formInput,
	modalSelect,
	formBtn
} = styles

interface IProps {
	closeModal: () => void,
	handleSubmit: (e: React.FormEvent<HTMLFormElement>, editTodo: ITodoItem | undefined) => void,
	editId: string | null
}

export const Modal: React.FC<IProps> = ({ closeModal, handleSubmit, editId }) => {
	const [name, setName] = useState<string>('')
	const [category, setCategory] = useState<string>('Task')
	const [content, setContent] = useState<string>('')

	const editTodo = useAppSelector(state => state.todos.find(todo => todo.id === editId))

	useEffect(() => {
		if (!editTodo) {
			return;
		}
		setName(editTodo.name)
		setCategory(editTodo.category)
		setContent(editTodo.content)
	}, [editTodo])


	useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

	const ModalElement = (
		<>
			<div className={modal}>
				<button className={closeBtn} type="button" onClick={closeModal}>Close</button>
				<form className={modalForm} onSubmit={(e)=>handleSubmit(e, editTodo)}>
					<label className={formLabel}>
						<span className={labelTitle}>Name</span>
						<input onChange={(e) => setName(e.target.value)} className={formInput} name="name" type="text" value={name}/>
					</label>
					<label className={formLabel}>
						<span className={labelTitle}>Category</span>
						<Form.Select onChange={(e)=> setCategory(e.target.value)} value={category} className={modalSelect} name="categories">
							<option value="Task">Task</option>
							<option value="Random Thought">Random Thought</option>
							<option value="Idea">Idea</option>
							<option value="Quote">Quote</option>
						</Form.Select>
					</label>
					<label className={formLabel}>
						<span className={labelTitle}>Content</span>
						<textarea onChange={(e)=> setContent(e.target.value)} value={content} className={formInput} name="content" rows={5}></textarea>
					</label>
					<button className={formBtn}>{!editId ? "Create Note" : "Edit"}</button>
				</form>
			</div>
			<div className={modalWrapper} onClick={closeModal}></div>
		</>
	)

	return createPortal(ModalElement, document.getElementById('modal-root')!);
}