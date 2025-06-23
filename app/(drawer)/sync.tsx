import React from 'react';
import { Text, List } from '@ui';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { EdgeInsets } from 'react-native-safe-area-context';
import type { ContextMenuOnPressNativeEvent } from 'react-native-context-menu-view';
import type { NativeSyntheticEvent } from 'react-native';
import type { Props as ListProps } from '@ui/list/list.d';

const Root = styled.View<{ $insets: EdgeInsets }>`
	flex: 1;
	background-color: #f2f2f7;
	padding-top: ${({ $insets }) => $insets.top + 42}px;
	padding-bottom: ${({ $insets }) => $insets.bottom}px;
`;

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
	const insets = useSafeAreaInsets();

	return (
		<Root $insets={insets}>
			<List sections={sections} style={{ flex: 1, paddingTop: 20 }} />
		</Root>
	);
};

export default SyncScreen;
