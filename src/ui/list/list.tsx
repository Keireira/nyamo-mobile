import React from 'react';

import Root from './list.styles';
import { LegendList } from '@legendapp/list';
import ListSectionComponent from './list-section';

import type { Props } from './list.d';
import type { Props as ListSectionProps } from './list-section';
import type { LegendListRenderItemProps } from '@legendapp/list';

const List = ({ sections, style }: Props) => {
	const renderItem = ({ item }: LegendListRenderItemProps<ListSectionProps>) => {
		return <ListSectionComponent {...item} />;
	};

	return (
		<Root style={style}>
			<LegendList
				data={sections}
				renderItem={renderItem}
				keyExtractor={(item) => item.id || item.title || 'section'}
				recycleItems
			/>
		</Root>
	);
};

export default List;
