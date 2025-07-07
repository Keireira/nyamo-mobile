import React from 'react';

import { List, Wrapper } from '@ui';

import type { Props as ListProps } from '@ui/list/list.d';

const sections: ListProps['sections'] = [
	{
		id: 'sync-section',
		title: 'Servers to refresh',
		innerArray: [
			{
				id: 'adfaf11',
				title: 'Navidrome 1.16.0',
				accessory: {
					type: 'context-menu',
					trigger: '97',
					onPress: ({ nativeEvent }) => {
						console.log(nativeEvent);
					},
					actions: [
						{ title: 'Fast scan', systemIcon: 'arrow.trianglehead.2.counterclockwise' },
						{ title: 'Full scan', systemIcon: 'sparkle.magnifyingglass' }
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
