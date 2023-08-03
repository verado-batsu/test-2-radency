import { Categories } from '../data';
import {
	icons
} from '../assets/images/tablePage'

export function chooseIcon(category: string): string {
	let icon = null;
	switch (category) {
		case Categories.task:
			icon = 'icon-task';
			break;
		case Categories.thought:
			icon = 'icon-thought';
			break;
		case Categories.idea:
			icon = 'icon-idea';
			break;
		case Categories.quote:
			icon = 'icon-quote';
			break;
		default: icon = 'icon-task';
	}

	return `${icons}#${icon}`;
}