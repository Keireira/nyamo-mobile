import React from 'react';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SymbolView } from 'expo-symbols';
import { BottomNavRoot, TabButton } from '@elements/bottom-nav';
import { Tabs, TabSlot, TabList, TabTrigger } from 'expo-router/ui';

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
							<SymbolView name="music.note" tintColor="white" type="hierarchical" />
						</TabButton>
					</TabTrigger>

					<TabTrigger name="library" href="/library" asChild>
						<TabButton
							style={{ justifyContent: 'center' }}
							onPress={() => {
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
							}}
						>
							<SymbolView name="rectangle.stack" tintColor="white" type="hierarchical" />
						</TabButton>
					</TabTrigger>

					<TabTrigger name="search" href="/search" asChild>
						<TabButton
							style={{ justifyContent: 'center' }}
							onPress={() => {
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
							}}
						>
							<SymbolView name="magnifyingglass" tintColor="white" type="hierarchical" />
						</TabButton>
					</TabTrigger>
				</BottomNavRoot>
			</TabList>
		</Tabs>
	);
};

export default TabLayout;
