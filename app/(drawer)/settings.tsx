import React, { useState } from 'react';

import { Wrapper, List } from '@ui';

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
								onPress: () => {
									console.log('English (US)');
								}
							},
							{
								id: '112',
								type: 'button',
								title: 'Castellano',
								onPress: () => {
									console.log('Castellano');
								}
							},
							{
								id: '113',
								type: 'button',
								title: 'Русский',
								onPress: () => {
									console.log('Русский');
								}
							},
							{
								id: '113',
								type: 'button',
								title: 'Қазақша',
								onPress: () => {
									console.log('Қазақша');
								}
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
					title: 'Crossfade',
					accessory: {
						type: 'drumroll',
						trigger: '5 seconds',
						actions: [
							{ id: '666', title: '2 seconds', onPress: () => console.log('2 seconds') },
							{ id: '667', title: '3 seconds', onPress: () => console.log('3 seconds') },
							{ id: '668', title: '4 seconds', onPress: () => console.log('4 seconds') },
							{ id: '669', title: '5 seconds', onPress: () => console.log('5 seconds') },
							{ id: '670', title: '6 seconds', onPress: () => console.log('6 seconds') },
							{ id: '671', title: '7 seconds', onPress: () => console.log('7 seconds') },
							{ id: '672', title: '8 seconds', onPress: () => console.log('8 seconds') },
							{ id: '673', title: '9 seconds', onPress: () => console.log('9 seconds') },
							{ id: '674', title: '10 seconds', onPress: () => console.log('10 seconds') },
							{ id: '675', title: '11 seconds', onPress: () => console.log('11 seconds') },
							{ id: '676', title: '12 seconds', onPress: () => console.log('12 seconds') },
							{ id: '677', title: '13 seconds', onPress: () => console.log('13 seconds') },
							{ id: '678', title: '14 seconds', onPress: () => console.log('14 seconds') },
							{ id: '679', title: '15 seconds', onPress: () => console.log('15 seconds') }
						]
					}
				},
				{
					id: '32',
					title: 'Skip Interval',
					accessory: {
						type: 'drumroll',
						trigger: '15 seconds',
						actions: [
							{ id: '566', title: '5 seconds', onPress: () => console.log('5 seconds') },
							{ id: '567', title: '10 seconds', onPress: () => console.log('10 seconds') },
							{ id: '568', title: '15 seconds', onPress: () => console.log('15 seconds') },
							{ id: '569', title: '20 seconds', onPress: () => console.log('20 seconds') },
							{ id: '570', title: '30 seconds', onPress: () => console.log('30 seconds') },
							{ id: '571', title: '45 seconds', onPress: () => console.log('45 seconds') },
							{ id: '572', title: '60 seconds', onPress: () => console.log('60 seconds') }
						]
					}
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
