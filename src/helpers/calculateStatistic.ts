import {
	todoData,
	statisticData,
	archiveTodoData,
	Categories
} from '../data'

export function calculateStatistic() {
	const activeStatistic = {
		task: 0,
		thought: 0,
		idea: 0,
		quote: 0,
	}

	const archivedStatistic = {
		task: 0,
		thought: 0,
		idea: 0,
		quote: 0,
	}

	todoData.forEach(todo => {
		switch (todo.category) {
			case Categories.task:
				activeStatistic.task += 1;
			break;
			case Categories.thought:
				activeStatistic.thought += 1;
				break;
			case Categories.idea:
				activeStatistic.idea += 1;
				break;
			case Categories.quote:
				activeStatistic.quote += 1;
				break;
			default: return;
		}
	})

	archiveTodoData.forEach(todo => {
		switch (todo?.category) {
			case Categories.task:
				archivedStatistic.task += 1;
			break;
			case Categories.thought:
				archivedStatistic.thought += 1;
				break;
			case Categories.idea:
				archivedStatistic.idea += 1;
				break;
			case Categories.quote:
				archivedStatistic.quote += 1;
				break;
			default: return;
		}
	})

	
	statisticData.forEach(stat => {
		switch (stat.category) {
			case Categories.task:
				stat.active = activeStatistic.task;
				stat.archived = archivedStatistic.task;
			break;
			case Categories.thought:
				stat.active = activeStatistic.thought;
				stat.archived = archivedStatistic.thought;
				break;
			case Categories.idea:
				stat.active = activeStatistic.idea;
				stat.archived = archivedStatistic.idea;
				break;
			case Categories.quote:
				stat.active = activeStatistic.quote;
				stat.archived = archivedStatistic.quote;
				break;
			default: return;
		}
	})
}