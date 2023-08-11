import styles from '../Table/Table.module.scss';

const {
	btnWrapper,
	createNoteBtn,
	toggleArchiveBtn,
} = styles;

interface IProps {
	openModal: Function,
	openArchive: Function,
	typeOfRender: 'todos' | 'archiveTodos',
}

export const TableButtons: React.FC<IProps> = ({ openModal, openArchive, typeOfRender }) => { 
	return (
		<div className={btnWrapper}>
			<button onClick={() => openModal()} className={createNoteBtn} type="button" >Create Note</button>
			<button onClick={() => openArchive()} className={toggleArchiveBtn} type="button">{typeOfRender === "todos" ? "Show Archive" : "Hide Archive"}</button>
		</div>
	)
}