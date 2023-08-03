import React from 'react';
import { Table } from '../components/Table/Table';

export const TablePage: React.FC = () => {
	return (
		<>
			<Table typeOfTable='todos' />
			<Table typeOfTable='summary' />
		</>
	)
}