import { Categories, statisticData } from "../data";
import { ISummaryItem, ITodoItem } from "../types";


export function calculateStatistic(todos: ITodoItem[], archiveTodos: ITodoItem[]): ISummaryItem[] {
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

	todos.forEach(todo => {
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
	archiveTodos.forEach(todo => {
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

	const statistic = statisticData.map(stat => {
		switch (stat.category) {
			case Categories.task:
				return {
					category: stat.category,
					active: activeStatistic.task,
					archived: archivedStatistic.task
				}
			case Categories.thought:
				return {
					category: stat.category,
					active: activeStatistic.thought,
					archived: archivedStatistic.thought
				}
			case Categories.idea:
				return {
					category: stat.category,
					active: activeStatistic.idea,
					archived: archivedStatistic.idea
				}
			case Categories.quote:
				return {
					category: stat.category,
					active: activeStatistic.quote,
					archived: archivedStatistic.quote
				}
			default: return {
				category: stat.category,
				active: stat.active,
				archived: stat.archived
			}
		}
	})

	return statistic;
}