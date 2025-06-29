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
						trigger: 'English',
						actions: [
							{
								id: '111',
								type: 'button',
								title: 'English (US)',
								onPress: () => console.log('English (US)')
							},
							{
								id: '112',
								type: 'button',
								title: 'Castellano',
								onPress: () => console.log('Castellano')
							},
							{
								id: '113',
								type: 'button',
								title: 'Русский',
								onPress: () => console.log('Русский')
							},
							{
								id: '113',
								type: 'button',
								title: 'Қазақша',
								onPress: () => console.log('Қазақша')
							}
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
						trigger: 'RAW',
						actions: [
							{
								id: '111',
								type: 'button',
								title: 'RAW',
								onPress: () => console.log('RAW')
							},
							{
								id: '112',
								type: 'picker',
								title: 'Compressed',
								selectedIndex: 0,
								options: ['32 kbps', '64 kbps', '96 kbps', '128 kbps', '160 kbps', '192 kbps', '256 kbps', '320 kbps'],
								onPress: ({ nativeEvent: { index } }) => console.log(index)
							}
						]
					}
				},
				{
					id: '42',
					title: 'Transcoding',
					accessory: {
						type: 'context-menu',
						trigger: 'RAW',
						actions: [
							{
								id: '111',
								type: 'button',
								title: 'RAW',
								onPress: () => console.log('RAW')
							},
							{
								id: '112',
								type: 'button',
								title: 'mp3',
								onPress: () => console.log('mp3')
							},
							{
								id: '113',
								type: 'button',
								title: 'opus',
								onPress: () => console.log('opus')
							}
						]
					}
				}
			]
		}
	];

	return <Wrapper<ListProps> as={List} withBottom={false} sections={sections} />;
};

export default SettingsScreen;
