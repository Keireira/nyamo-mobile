import React from 'react';

import { List, Wrapper } from '@ui';

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
							onPress: () => {
								console.log('FIRE FAST SCAN');
							}
						},
						{
							id: '112',
							type: 'button',
							title: 'Full scan',
							systemIcon: 'sparkle.magnifyingglass',
							onPress: () => {
								console.log('FIRE FULL SCAN');
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
							onPress: () => {
								console.log('FIRE FAST SCAN');
							}
						},
						{
							id: '122',
							type: 'button',
							title: 'Full scan',
							systemIcon: 'sparkle.magnifyingglass',
							onPress: () => {
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
