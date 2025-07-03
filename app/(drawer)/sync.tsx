import React from 'react';

import { List, Wrapper } from '@ui';
import { requestPermissionsAsync, scheduleNotificationAsync } from 'expo-notifications';

import type { Props as ListProps } from '@ui/list/list.d';

const sections: ListProps['sections'] = [
	{
		id: 'sdfsdf1',
		title: 'Servers to refresh',
		innerArray: [
			{
				id: 'adfaf11',
				title: 'Navidrome 1.16.0',
				accessory: {
					type: 'context-menu',
					trigger: '97',
					actions: [
						{
							id: '23123213as111',
							type: 'button',
							title: 'Fast scan',
							systemIcon: 'arrow.trianglehead.2.counterclockwise',
							onPress: () => {
								requestPermissionsAsync();
								console.log('FIRE FAST SCAN');
							}
						},
						{
							id: 'afdfsdf112',
							type: 'button',
							title: 'Full scan',
							systemIcon: 'sparkle.magnifyingglass',
							onPress: () => {
								requestPermissionsAsync();
								console.log('FIRE FULL SCAN');

								window.setTimeout(() => {
									scheduleNotificationAsync({
										content: {
											title: 'Sync finished'
										},
										trigger: null
									});
								}, 5000);
							}
						}
					]
				}
			},
			{
				id: '123123a12',
				title: 'Emby 4.10.0',
				accessory: {
					type: 'context-menu',
					trigger: '197 Folders',
					actions: [
						{
							id: '123123123121',
							type: 'button',
							title: 'Fast scan',
							systemIcon: 'arrow.trianglehead.2.counterclockwise',
							onPress: () => {
								requestPermissionsAsync();
								console.log('FIRE FAST SCAN');
							}
						},
						{
							id: 'sdfsdfdsfsdf122',
							type: 'button',
							title: 'Full scan',
							systemIcon: 'sparkle.magnifyingglass',
							onPress: () => {
								requestPermissionsAsync();
								console.log('FIRE FULL SCAN');
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
