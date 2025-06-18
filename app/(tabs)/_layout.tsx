import React from 'react';
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { BlurView } from 'expo-blur';
import Entypo from '@expo/vector-icons/Entypo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const TabBarContainer = styled(BlurView)<{ $bottom: number }>`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	padding-bottom: ${({ $bottom }) => $bottom}px;
	z-index: 999;
	border-radius: 0;
	overflow: hidden;
`;

const TabButton = styled.Pressable`
	flex: 1;
	padding-top: 24px;
	padding-bottom: 16px;
`;

const TabLayout = () => {
	const insets = useSafeAreaInsets();

	return (
		<Tabs>
			<TabSlot />

			<TabList asChild>
				<TabBarContainer $bottom={insets.bottom} intensity={30} tint="dark">
					<TabTrigger name="home" href="/" asChild>
						<TabButton style={{ justifyContent: 'center' }}>
							<Entypo name="note" size={24} color="white" />
						</TabButton>
					</TabTrigger>

					<TabTrigger name="library" href="/library" asChild>
						<TabButton style={{ justifyContent: 'center' }}>
							<Entypo name="compass" size={24} color="white" />
						</TabButton>
					</TabTrigger>
				</TabBarContainer>
			</TabList>
		</Tabs>
	);
};

export default TabLayout;
