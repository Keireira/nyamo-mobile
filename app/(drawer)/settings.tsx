import React, { useState } from 'react';

import i18n from '@src/i18n';
import * as Linking from 'expo-linking';
import { useTranslation } from 'react-i18next';
import { Settings, useColorScheme } from 'react-native';

import { Wrapper, List } from '@ui';

import type { Props as ListProps } from '@ui/list/list.d';

const BITRATE_OPTIONS = ['32 kbps', '64 kbps', '96 kbps', '128 kbps', '160 kbps', '192 kbps', '256 kbps', '320 kbps'];

const SettingsScreen = () => {
	const { t } = useTranslation();
	const colorScheme = useColorScheme();
	const [isFolderView, setFolderView] = useState(() => Settings.get('folder_view'));
	const [isExtendedFeedback, setExtendedFeedback] = useState(() => Settings.get('extended_feedback'));
	const [isInAppNotifications, setInAppNotifications] = useState(() => Settings.get('in_app_notifications'));

	const changeColorScheme = (isDarkMode: boolean) => {
		Settings.set({ theme: isDarkMode ? 'dark' : 'light' });
	};

	const sections: ListProps['sections'] = [
		{
			id: 'general-section',
			title: 'General',
			innerArray: [
				{
					id: 'general-folder-view',
					title: 'Folder View',
					accessory: {
						type: 'switch',
						value: isFolderView,
						onPress: (value: boolean) => {
							Settings.set({ folder_view: value });
							setFolderView(value);
						}
					}
				},
				{
					id: 'general-haptic-feedback',
					title: 'Haptic Feedback',
					accessory: {
						type: 'switch',
						value: isExtendedFeedback,
						onPress: (value: boolean) => {
							Settings.set({ extended_feedback: value });
							setExtendedFeedback(value);
						}
					}
				},
				{
					id: 'general-in-app-notifications',
					title: 'In-App Notifications',
					accessory: {
						type: 'switch',
						value: isInAppNotifications,
						onPress: (value: boolean) => {
							Settings.set({ in_app_notifications: value });
							setInAppNotifications(value);
						}
					}
				}
			]
		},
		{
			id: 'appearance-section',
			title: 'Appearance',
			innerArray: [
				{
					id: 'appearance-language',
					title: 'Language',
					accessory: {
						type: 'plain-action',
						trigger: t(`languages.${i18n.language}`),
						onPress: () => {
							Linking.openSettings();
						}
					}
				},
				{
					id: 'appearance-dark-mode',
					title: 'Dark Mode',
					accessory: {
						type: 'switch',
						value: colorScheme === 'dark',
						onPress: changeColorScheme
					}
				}
			]
		},

		{
			id: 'playback-section',
			title: 'Playback',
			innerArray: [
				{
					id: 'playback-crossfade',
					title: 'Crossfade',
					accessory: {
						type: 'drumroll',
						trigger: '5 seconds',
						actions: [
							{ id: 'playback-crossfade-1', title: '2 seconds', onPress: () => console.log('2 seconds') },
							{ id: 'playback-crossfade-2', title: '3 seconds', onPress: () => console.log('3 seconds') },
							{ id: 'playback-crossfade-3', title: '4 seconds', onPress: () => console.log('4 seconds') },
							{ id: 'playback-crossfade-4', title: '5 seconds', onPress: () => console.log('5 seconds') },
							{ id: 'playback-crossfade-5', title: '6 seconds', onPress: () => console.log('6 seconds') },
							{ id: 'playback-crossfade-6', title: '7 seconds', onPress: () => console.log('7 seconds') },
							{ id: 'playback-crossfade-7', title: '8 seconds', onPress: () => console.log('8 seconds') },
							{ id: 'playback-crossfade-8', title: '9 seconds', onPress: () => console.log('9 seconds') },
							{ id: 'playback-crossfade-9', title: '10 seconds', onPress: () => console.log('10 seconds') },
							{ id: 'playback-crossfade-10', title: '11 seconds', onPress: () => console.log('11 seconds') },
							{ id: 'playback-crossfade-11', title: '12 seconds', onPress: () => console.log('12 seconds') },
							{ id: 'playback-crossfade-12', title: '13 seconds', onPress: () => console.log('13 seconds') },
							{ id: 'playback-crossfade-13', title: '14 seconds', onPress: () => console.log('14 seconds') },
							{ id: 'playback-crossfade-14', title: '15 seconds', onPress: () => console.log('15 seconds') }
						]
					}
				},
				{
					id: 'playback-skip-interval',
					title: 'Skip Interval',
					accessory: {
						type: 'drumroll',
						trigger: '15 seconds',
						actions: [
							{ id: 'playback-skip-interval-5', title: '5 seconds', onPress: () => console.log('5 seconds') },
							{ id: 'playback-skip-interval-10', title: '10 seconds', onPress: () => console.log('10 seconds') },
							{ id: 'playback-skip-interval-15', title: '15 seconds', onPress: () => console.log('15 seconds') },
							{ id: 'playback-skip-interval-20', title: '20 seconds', onPress: () => console.log('20 seconds') },
							{ id: 'playback-skip-interval-30', title: '30 seconds', onPress: () => console.log('30 seconds') },
							{ id: 'playback-skip-interval-45', title: '45 seconds', onPress: () => console.log('45 seconds') }
						]
					}
				}
			]
		},

		{
			id: 'streaming-section',
			title: 'Streaming',
			innerArray: [
				{
					id: 'streaming-max-bitrate',
					title: 'Max Bitrate',
					accessory: {
						type: 'context-menu',
						trigger: 'RAW',
						actions: [
							{
								id: 'streaming-max-bitrate-raw',
								type: 'button',
								title: 'RAW',
								onPress: () => console.log('RAW')
							},
							{
								id: 'streaming-max-bitrate-compressed',
								type: 'picker',
								title: 'Compressed',
								selectedIndex: 0,
								options: BITRATE_OPTIONS,
								onPress: ({ nativeEvent: { index } }) => console.log(index)
							}
						]
					}
				},
				{
					id: 'streaming-transcoding',
					title: 'Transcoding',
					accessory: {
						type: 'context-menu',
						trigger: 'RAW',
						actions: [
							{
								id: 'streaming-transcoding-raw',
								type: 'button',
								title: 'RAW',
								onPress: () => console.log('RAW')
							},
							{
								id: 'streaming-transcoding-compressed',
								type: 'button',
								title: 'mp3',
								onPress: () => console.log('mp3')
							},
							{
								id: 'streaming-transcoding-opus',
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
