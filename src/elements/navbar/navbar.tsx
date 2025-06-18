import React from 'react';
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { BlurView } from 'expo-blur';
import Entypo from '@expo/vector-icons/Entypo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const TabBarContainer = styled.View`
	position: absolute;
	left: 16px;
	right: 16px;
	bottom: ${({ $insets }) => $insets.bottom + 16}px;
	z-index: 999;
	height: 60px;
	border-radius: 20px;
	overflow: hidden;
`;

const BlurContainer = styled(BlurView)`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
`;

const Navbar = () => {
	const insets = useSafeAreaInsets();

	return (
		<TabBarContainer $insets={insets}>
			<BlurContainer intensity={80} tint="light">
				<TabTrigger name="home" href="/">
					<Entypo name="note" size={24} color="black" />
				</TabTrigger>
				<TabTrigger name="library" href="/library">
					<Entypo name="compass" size={24} color="black" />
				</TabTrigger>
			</BlurContainer>
		</TabBarContainer>
	);
};

export default Navbar;
