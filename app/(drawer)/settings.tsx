import React, { useEffect, useState } from 'react';

import i18n from '@src/i18n';
import * as Linking from 'expo-linking';
import { useTranslation } from 'react-i18next';
import { View, Settings, useColorScheme, ScrollView } from 'react-native';

import { Wrapper, List } from '@ui';

import type { Props as ListProps } from '@ui/list/list.d';

const BITRATE_OPTIONS = ['32 kbps', '64 kbps', '96 kbps', '128 kbps', '160 kbps', '192 kbps', '256 kbps', '320 kbps'];
const CROSSFADE_OPTIONS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((seconds) => ({
	id: `playback-crossfade-${seconds}`,
	value: seconds,
	title: `${seconds} seconds`
}));
const SKIP_INTERVAL_OPTIONS = [5, 10, 15, 20, 30, 45].map((seconds) => ({
	id: `playback-skip-interval-${seconds}`,
	value: seconds,
	title: `${seconds} seconds`
}));

const SettingsScreen = () => {
	const { t } = useTranslation();
	const colorScheme = useColorScheme();

	console.log('colorScheme:', colorScheme, Settings.get('theme'));

	const [isFolderView, setFolderView] = useState(() => {
		const value = Settings.get('folder_view');

		return value === 1;
	});

	const [isInAppNotifications, setInAppNotifications] = useState(() => {
		const value = Settings.get('in_app_notifications');

		return value === 1;
	});

	const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

	useEffect(() => {
		setIsDarkMode(colorScheme === 'dark');
	}, [colorScheme]);

	const changeColorScheme = (isDarkMode: boolean) => {
		Settings.set({ theme: isDarkMode ? 'dark' : 'light' });
		setIsDarkMode(isDarkMode);
	};

	const openSettings = () => {
		Linking.openSettings();
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
						onPress: openSettings
					}
				},
				{
					id: 'appearance-dark-mode',
					title: 'Dark Mode',
					accessory: {
						type: 'switch',
						value: isDarkMode,
						onPress: changeColorScheme
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
						onPress: ({ nativeEvent: { index } }) => console.log(CROSSFADE_OPTIONS[index]),
						actions: CROSSFADE_OPTIONS
					}
				},
				{
					id: 'playback-skip-interval',
					title: 'Skip Interval',
					accessory: {
						type: 'drumroll',
						trigger: '15 seconds',
						onPress: ({ nativeEvent: { index } }) => console.log(SKIP_INTERVAL_OPTIONS[index]),
						actions: SKIP_INTERVAL_OPTIONS
					}
				}
			]
		}
	];

	return <Wrapper<ListProps> as={List} withBottom={false} sections={sections} />;
};

export default SettingsScreen;
