import React, { useMemo } from 'react';
import { Pressable } from 'react-native';

import { usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Root, { Title } from './top-bar.styles';
import Ionicons from '@expo/vector-icons/Ionicons';

import type { DrawerHeaderProps } from '@react-navigation/drawer';

const useGetTitle = () => {
	const pathname = usePathname();

	const title = useMemo(() => {
		switch (pathname) {
			case '/':
			case '/(tabs)':
				return 'Home';
			// return 'Home ∴ hoomu';
			// return 'Home ∴ ホーム';
			case '/library':
			case '/(tabs)/library':
				return 'Library';
			// return 'Library ∴ raiburarii';
			// return 'Library ∴ ライブラリ';
			case '/search':
			case '/(tabs)/search':
				return 'Search';
			// return 'Search ∴ kensaku';
			// return 'Search ∴ けんさく';

			case '/auth':
				return 'Login';

			case '/settings':
				return 'Settings';

			case '/sync':
				return 'Sync';

			case '/downloads':
				return 'Downloads';

			default:
				return 'Nyamo ∴ にゃも';
		}
	}, [pathname]);

	return title;
};

const TopBar = (props: DrawerHeaderProps) => {
	const title = useGetTitle();
	const insets = useSafeAreaInsets();

	const openDrawer = () => {
		props.navigation.openDrawer();
	};

	return (
		<Root $top={insets.top}>
			<Title>{title}</Title>

			<Pressable
				onPress={openDrawer}
				hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
				style={({ pressed }) => [
					{
						zIndex: 1000,
						justifyContent: 'center',
						alignItems: 'center',
						opacity: pressed ? 0.8 : 1
					}
				]}
			>
				<Ionicons name="disc-outline" size={24} color="white" />
			</Pressable>
		</Root>
	);
};

export default TopBar;
