import type { Meta } from '@storybook/react';

import '../../index.css';

import { TableButtons } from './TableButtons';

const meta: Meta<typeof TableButtons> = {
	title: "TableButtons",
	component: TableButtons,
	argTypes: {
		typeOfRender: {
			type: 'string',
			defaultValue: 'todos',
			options: ['todos', 'archiveTodos'],
			control: {
				type: 'radio'
			}
		}
	}
};

export default meta;

export const Default = {
	args: {
		typeOfRender: 'todos'
	}
}
