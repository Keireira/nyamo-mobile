import React from 'react';
import { View } from 'react-native';
import ContextMenu from './context-menu';

import type { ContextMenuProps } from 'react-native-context-menu-view';

const example_actions: ContextMenuProps['actions'] = [
	{ title: 'Title 2', subtitle: 'Subtitle 1', systemIcon: 'pencil.and.outline', selected: false },
	{ title: 'Title 2', subtitle: 'Subtitle 1', systemIcon: 'pencil.and.outline', selected: true },
	{
		title: 'Remove',
		systemIcon: 'trash',
		destructive: true,
		actions: [{ title: 'Title 3', subtitle: 'Subtitle 3', systemIcon: 'pencil.and.outline', selected: false }]
	}
];

const ContextMenuExample = () => {
	return (
		<View>
			<ContextMenu actions={example_actions} />
		</View>
	);
};

export default ContextMenuExample;
