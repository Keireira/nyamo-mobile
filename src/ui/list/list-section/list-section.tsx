import React from 'react';

import ListItemComponent from '../list-item';
import { LegendList } from '@legendapp/list';

import { ListSection, SectionHeader, GroupedListContainer, GroupedListItem } from './list-section.styles';

import type { Props } from './list-section.d';
import type { Props as ListItemProps } from '../list-item';
import type { LegendListRenderItemProps } from '@legendapp/list';

const ListSectionComponent = ({ title, innerArray }: Props) => {
	const renderItem = ({ item, index }: LegendListRenderItemProps<ListItemProps>) => {
		const isFirst = index === 0;
		const isLast = index === innerArray.length - 1;

		return (
			<GroupedListItem
				key={item.id}
				onPress={item.onPress}
				disabled={item.disabled}
				$isFirst={isFirst}
				$isLast={isLast}
			>
				<ListItemComponent {...item} />
			</GroupedListItem>
		);
	};

	return (
		<ListSection>
			{Boolean(title) && <SectionHeader>{title}</SectionHeader>}

			<GroupedListContainer>
				<LegendList data={innerArray} renderItem={renderItem} keyExtractor={(item) => item.id} recycleItems />
			</GroupedListContainer>
		</ListSection>
	);
};

export default ListSectionComponent;
