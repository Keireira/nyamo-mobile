import React, { useEffect, useState } from 'react';

import i18n from '@src/i18n';
import * as Linking from 'expo-linking';
import { useTranslation } from 'react-i18next';
import SettingsBridgeModule from '@modules/settings-bridge';

import { Wrapper, List } from '@ui';
import { Settings, useColorScheme } from 'react-native';
import { requestNotifications, checkNotifications, RESULTS } from 'react-native-permissions';

import type { Props as ListProps } from '@ui/list/list.d';
import type { PermissionStatus } from 'react-native-permissions';
import type { AccessoryDrumrollOnPressEvent } from '@ui/list/accessories';

const BITRATE_OPTIONS = [32, 64, 96, 128, 160, 192, 256, 320].map((value) => ({
	title: `${value} kbps`,
	value
}));

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

const NOTIFICATION_STATUS_LABELS: Record<PermissionStatus, string> = {
	[RESULTS.UNAVAILABLE]: '',
	[RESULTS.DENIED]: 'Not requested',
	[RESULTS.BLOCKED]: 'Denied',
	[RESULTS.GRANTED]: 'All good',
	[RESULTS.LIMITED]: 'All good'
};

const useGetNotificationStatus = () => {
	const [notificationStatus, setNotificationStatus] = useState<PermissionStatus | null>(null);

	const check = () => {
		checkNotifications().then(({ status }) => {
			setNotificationStatus(status);
		});
	};

	useEffect(() => {
		check();

		SettingsBridgeModule.addListener('onNotificationChanged', (event) => {
			check();
		});

		return () => {
			SettingsBridgeModule.removeAllListeners('onNotificationChanged');
		};
	}, []);

	return {
		status: notificationStatus,
		label: NOTIFICATION_STATUS_LABELS[notificationStatus ?? RESULTS.UNAVAILABLE]
	};
};

const SettingsScreen = () => {
	const { t } = useTranslation();
	const colorScheme = useColorScheme();

	const notificationStatus = useGetNotificationStatus();

	const [isFolderView, setFolderView] = useState(() => {
		const value = Settings.get('folder_view');

		return `${value}` === '1';
	});

	const [crossfade, setCrossfade] = useState(() => {
		const value = Settings.get('crossfade');

		if (!value) {
			Settings.set({ crossfade: 3 });
			return 3;
		}

		return value;
	});

	const [skipInterval, setSkipInterval] = useState(() => {
		const value = Settings.get('skip_interval');

		if (!value) {
			Settings.set({ skip_interval: 2 });
			return 2;
		}

		return value;
	});

	const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

	useEffect(() => {
		setIsDarkMode(colorScheme === 'dark');
	}, [colorScheme]);

	const changeColorScheme = (isDarkMode: boolean) => {
		Settings.set({ theme: isDarkMode ? 'dark' : 'light' });
		setIsDarkMode(isDarkMode);
	};

	const changeFolderView = (isFolderView: boolean) => {
		Settings.set({ folder_view: isFolderView });
		setFolderView(isFolderView);
	};

	const handleNotifications = () => {
		if (notificationStatus.status === RESULTS.DENIED) {
			requestNotifications();
		} else if (notificationStatus.status === RESULTS.BLOCKED) {
			Linking.openSettings();
		}
	};

	const handleCrossfade = ({ nativeEvent: { index } }: AccessoryDrumrollOnPressEvent) => {
		Settings.set({ crossfade: index });
		setCrossfade(index);
	};

	const handleSkipInterval = ({ nativeEvent: { index } }: AccessoryDrumrollOnPressEvent) => {
		Settings.set({ skip_interval: index });
		setSkipInterval(index);
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
						disabled: true,
						value: isFolderView,
						onPress: changeFolderView
					}
				},
				{
					id: 'general-in-app-notifications',
					title: 'Notifications',
					accessory: {
						type: 'plain-action',
						trigger: notificationStatus.label,
						onPress: handleNotifications
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
			id: 'playback-section',
			title: 'Playback',
			innerArray: [
				{
					id: 'playback-crossfade',
					title: 'Crossfade',
					accessory: {
						type: 'drumroll',
						selectedIndex: crossfade,
						trigger: CROSSFADE_OPTIONS[crossfade]?.title || 'Select...',
						onPress: handleCrossfade,
						actions: CROSSFADE_OPTIONS
					}
				},
				{
					id: 'playback-skip-interval',
					title: 'Skip Interval',
					accessory: {
						type: 'drumroll',
						selectedIndex: skipInterval,
						trigger: SKIP_INTERVAL_OPTIONS[skipInterval]?.title || 'Select...',
						onPress: handleSkipInterval,
						actions: SKIP_INTERVAL_OPTIONS
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
						onPress: ({ nativeEvent }) => {
							console.log(nativeEvent);
						},
						actions: [
							{ title: 'RAW' },
							{
								title: 'Compressed',
								actions: BITRATE_OPTIONS.map(({ title }) => ({ title }))
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
						onPress: ({ nativeEvent }) => {
							console.log(nativeEvent);
						},
						actions: [{ title: 'RAW' }, { title: 'mp3' }, { title: 'opus', disabled: true }]
					}
				}
			]
		}
	];

	return <Wrapper<ListProps> as={List} withBottom={false} sections={sections} />;
};

export default SettingsScreen;
