import React from 'react';

import { Text, List, Wrapper } from '@ui';

import type { NativeSyntheticEvent } from 'react-native';
import type { Props as ListProps } from '@ui/list/list.d';
import type { ContextMenuOnPressNativeEvent } from 'react-native-context-menu-view';

const sections: ListProps['sections'] = [
	{
		id: '1',
		title: 'Servers to refresh',
		innerArray: [
			{
				id: '11',
				title: 'Navidrome 1.16.0',
				accessory: {
					type: 'context-menu',
					children: <Text style={{ fontSize: 18, color: '#666' }}>97 Folders</Text>,
					actions: [
						{ title: 'Fast scan', systemIcon: 'arrow.trianglehead.2.counterclockwise' },
						{ title: 'Full scan', systemIcon: 'sparkle.magnifyingglass' }
					],
					onPress: (e: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>) => {
						console.log(e);
					}
				}
			},
			{
				id: '12',
				title: 'Emby 4.10.0',
				accessory: {
					type: 'context-menu',
					children: <Text style={{ fontSize: 18, color: '#666' }}>197 Folders</Text>,
					actions: [
						{ title: 'Fast scan', systemIcon: 'arrow.trianglehead.2.counterclockwise' },
						{ title: 'Full scan', systemIcon: 'sparkle.magnifyingglass' }
					],
					onPress: (e: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>) => {
						console.log(e);
					}
				}
			}
		]
	}
];

const SyncScreen = () => {
	return <Wrapper<ListProps> as={List} withBottom={false} sections={sections} />;
};

export default SyncScreen;
