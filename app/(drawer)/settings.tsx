import React, { useState } from 'react';

import { Wrapper, List, Text } from '@ui';

import type { Props as ListProps } from '@ui/list/list.d';

const SettingsScreen = () => {
	const [value, setValue] = useState(false);
	const [value2, setValue2] = useState(true);
	const [value3, setValue3] = useState(true);
	const [value4, setValue4] = useState(true);

	const sections: ListProps['sections'] = [
		{
			id: '1',
			title: 'General',
			innerArray: [
				{
					id: '11',
					title: 'Folder View',
					accessory: {
						type: 'switch',
						value: value,
						onPress: setValue
					}
				},
				{
					id: '12',
					title: 'Haptic Feedback',
					accessory: {
						type: 'switch',
						value: value2,
						onPress: setValue2
					}
				},
				{
					id: '13',
					title: 'In-App Notifications',
					accessory: {
						type: 'switch',
						value: value3,
						onPress: setValue3
					}
				}
			]
		},
		{
			id: '2',
			title: 'Appearance',
			innerArray: [
				{
					id: '23',
					title: 'Language',
					accessory: {
						type: 'context-menu',
						children: <Text style={{ fontSize: 18, color: '#666' }}>English</Text>,
						actions: [
							{ title: 'English (US)' },
							{ title: 'Castellano', subtitle: 'Spanish' },
							{ title: 'Русский', subtitle: 'Russian' },
							{ title: 'Қазақ', subtitle: 'Kazakh' }
						]
					}
				},
				{
					id: '21',
					title: 'Dark Mode',
					accessory: {
						type: 'switch',
						value: value4,
						onPress: setValue4
					}
				}
			]
		},

		{
			id: '3',
			title: 'Playback',
			innerArray: [
				{
					id: '31',
					title: 'Crossfade'
					// accessory: 'drumroll',
					// 0..12 seconds, default 4
				},
				{
					id: '32',
					title: 'Skip Interval'
					// accessory: 'drumroll',
					// 5\10\15\20\30\45\60 seconds, default 15
				}
			]
		},

		{
			id: '4',
			title: 'Streaming',
			innerArray: [
				{
					id: '41',
					title: 'Max Bitrate',
					accessory: {
						type: 'context-menu',
						children: <Text style={{ fontSize: 18, color: '#666' }}>RAW</Text>,
						actions: [
							{ title: 'RAW' },
							{
								title: 'Compressed',
								actions: [
									{ title: '32 kbps' },
									{ title: '64 kbps' },
									{ title: '96 kbps' },
									{ title: '128 kbps' },
									{ title: '160 kbps' },
									{ title: '192 kbps' },
									{ title: '256 kbps' },
									{ title: '320 kbps' }
								]
							}
						]
					}
				},
				{
					id: '42',
					title: 'Transcoding',
					accessory: {
						type: 'context-menu',
						children: <Text style={{ fontSize: 18, color: '#666' }}>RAW</Text>,
						actions: [{ title: 'RAW' }, { title: 'mp3' }]
					}
				}
			]
		}
	];

	return <Wrapper<ListProps> as={List} withBottom={false} sections={sections} />;
};

export default SettingsScreen;
