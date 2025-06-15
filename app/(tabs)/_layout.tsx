import React from 'react';
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Text } from '@ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const TabBar = styled.View`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	height: ${({ $insets }) => $insets.bottom + 10}px;
	background-color: red;
`;

const TabLayout = () => {
	const insets = useSafeAreaInsets();

	return (
		<Tabs>
			<TabSlot />

			<TabList asChild>
				<TabBar $insets={insets}>
					<TabTrigger name="home" href="/" asChild>
						<Text>Home</Text>
					</TabTrigger>
					<TabTrigger name="library" href="/library" asChild>
						<Text>Library</Text>
					</TabTrigger>
					<TabTrigger name="favorites" href="/favorites" asChild>
						<Text>Favorites</Text>
					</TabTrigger>
					<TabTrigger name="search" href="/search" asChild>
						<Text>Search</Text>
					</TabTrigger>
				</TabBar>
			</TabList>
		</Tabs>
	);
};

export default TabLayout;
