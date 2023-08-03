import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Form from 'react-bootstrap/Form';

import styles from './Modal.module.scss'

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
	handleSubmit: (e: React.FormEvent<HTMLFormElement>)=> void,
}

export const Modal: React.FC<IProps> = ({ closeModal, handleSubmit }) => {
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
				<form className={modalForm} onSubmit={handleSubmit}>
					<label className={formLabel}>
						<span className={labelTitle}>Name</span>
						<input className={formInput} name="name" type="text" />
					</label>
					<label className={formLabel}>
						<span className={labelTitle}>Category</span>
						<Form.Select defaultValue='Task' className={modalSelect} name="categories">
							<option value="Task">Task</option>
							<option value="Random Thought">Random Thought</option>
							<option value="Idea">Idea</option>
							<option value="Quote">Quote</option>
						</Form.Select>
					</label>
					<label className={formLabel}>
						<span className={labelTitle}>Content</span>
						<textarea className={formInput} name="content" rows={5}></textarea>
					</label>
					<button className={formBtn}>Create Note</button>
				</form>
			</div>
			<div className={modalWrapper} onClick={closeModal}></div>
		</>
	)

	return createPortal(ModalElement, document.getElementById('modal-root')!);
}