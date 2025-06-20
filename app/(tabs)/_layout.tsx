import React from 'react';
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
						<TabButton style={{ justifyContent: 'center' }}>
							<Icon name="musical-notes-outline" $glitchColor="#FF00FF" />
						</TabButton>
					</TabTrigger>

					<TabTrigger name="library" href="/library" asChild>
						<TabButton style={{ justifyContent: 'center' }}>
							<Icon name="albums-outline" $glitchColor="#FFFF00" />
						</TabButton>
					</TabTrigger>

					<TabTrigger name="search" href="/search" asChild>
						<TabButton style={{ justifyContent: 'center' }}>
							<Icon name="search-outline" $glitchColor="#00FFFF" />
						</TabButton>
					</TabTrigger>
				</BottomNavRoot>
			</TabList>
		</Tabs>
	);
};

export default TabLayout;
