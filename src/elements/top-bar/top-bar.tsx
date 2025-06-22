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
				return 'Home';
			case '/library':
				return 'Library';
			case '/search':
				return 'Search';
			case '/auth':
				return 'Login';
			case '/settings':
				return 'Settings';
			case '/sync':
				return 'Sync';
			case '/downloads':
				return 'Downloads';

			default:
				return 'Nyamo';
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
				hitSlop={20}
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
