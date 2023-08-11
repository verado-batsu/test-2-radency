import React from 'react';
import { chooseIcon } from '../../../helpers';

import { ISummaryItem } from '../../../types';
import { styles } from '../itemStyles';

const {
	tableItem,
	tableRow,
	statisticRowItem,
	iconWrapper,
} = styles;

interface IProps {
	key: string,
	summary: ISummaryItem,
}

export const SummaryItem: React.FC<IProps> = ({ summary }) => {
	const icon = chooseIcon(summary.category);

	return (
		<li className={tableItem}>
			<ul className={tableRow}>
				<li className={statisticRowItem}>
					<div className={iconWrapper}>
						<svg className={"fill-white"} width="24" height="24">
							<use href={icon}></use>
						</svg>
					</div>
					<span>{summary.category}</span>
				</li>
				<li className={statisticRowItem}>{summary.active}</li>
				<li className={statisticRowItem}>{summary.archived}</li>
			</ul>
		</li>
	)
}