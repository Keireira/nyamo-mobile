import React from 'react';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Tabs, TabSlot, TabList, TabTrigger } from 'expo-router/ui';
import { BottomNavRoot, Icon, TabButton } from '@elements/bottom-nav';

const TabLayout = () => {
	const insets = useSafeAreaInsets();

	return (
		<Tabs>
			<TabSlot />

			<TabList asChild>
				<BottomNavRoot $bottom={insets.bottom} intensity={30} tint="dark">
					<TabTrigger name="home" href="/" asChild>
						<TabButton
							style={{ justifyContent: 'center' }}
							onPress={() => {
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
							}}
						>
							<Icon name="musical-notes-outline" />
						</TabButton>
					</TabTrigger>

					<TabTrigger name="library" href="/library" asChild>
						<TabButton
							style={{ justifyContent: 'center' }}
							onPress={() => {
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
							}}
						>
							<Icon name="albums-outline" />
						</TabButton>
					</TabTrigger>

					<TabTrigger name="search" href="/search" asChild>
						<TabButton
							style={{ justifyContent: 'center' }}
							onPress={() => {
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
							}}
						>
							<Icon name="search-outline" />
						</TabButton>
					</TabTrigger>
				</BottomNavRoot>
			</TabList>
		</Tabs>
	);
};

export default TabLayout;
