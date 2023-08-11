import type { Meta } from '@storybook/react';

import '../../index.css';

import { Table } from "./Table";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const meta: Meta<typeof Table> = {
	title: "Table",
	component: Table,
	decorators: [(Story) => <Provider store={store}><Story /></Provider>],
	argTypes: {
		typeOfTable: {
			type: 'string',
			defaultValue: 'todos',
			options: ['todos', 'archiveTodos', 'summary'],
			control: {
				type: 'radio'
			}
		}
	}
};

export default meta;

export const Default = {
	args: {
		typeOfTable: 'todos'
	}
}

export const Archive = {
	args: {
		typeOfTable: 'archiveTodos'
	}
}

export const Summary = {
	args: {
		typeOfTable: 'summary'
	}
}