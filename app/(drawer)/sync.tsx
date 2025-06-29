import React from 'react';

import { Text, List, Wrapper } from '@ui';

import type { NativeSyntheticEvent } from 'react-native';
import type { Props as ListProps } from '@ui/list/list.d';

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
					trigger: '97',
					actions: [
						{
							id: '111',
							type: 'button',
							title: 'Fast scan',
							systemIcon: 'arrow.trianglehead.2.counterclockwise',
							onPress: ({ nativeEvent }: NativeSyntheticEvent<unknown>) => {
								console.log(nativeEvent);
							}
						},
						{
							id: '112',
							type: 'button',
							title: 'Full scan',
							systemIcon: 'sparkle.magnifyingglass',
							onPress: ({ nativeEvent }: NativeSyntheticEvent<unknown>) => {
								console.log(nativeEvent);
							}
						}
					]
				}
			},
			{
				id: '12',
				title: 'Emby 4.10.0',
				accessory: {
					type: 'context-menu',
					trigger: '197 Folders',
					actions: [
						{
							id: '121',
							type: 'button',
							title: 'Fast scan',
							systemIcon: 'arrow.trianglehead.2.counterclockwise',
							onPress: ({ nativeEvent }: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>) => {
								console.log(nativeEvent);
							}
						},
						{
							id: '122',
							type: 'button',
							title: 'Full scan',
							systemIcon: 'sparkle.magnifyingglass',
							onPress: ({ nativeEvent }: NativeSyntheticEvent<ContextMenuOnPressNativeEvent>) => {
								console.log(nativeEvent);
							}
						}
					]
				}
			}
		]
	}
];

const SyncScreen = () => {
	return <Wrapper<ListProps> as={List} withBottom={false} sections={sections} />;
};

export default SyncScreen;
