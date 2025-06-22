import React from 'react';
import { Stack } from 'expo-router';

const DrawerLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false, animation: 'none' }}>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="users" options={{ headerShown: false }} />
			<Stack.Screen name="downloads" options={{ headerShown: false, title: 'Downloads' }} />
			<Stack.Screen name="settings" options={{ headerShown: false, title: 'Settings' }} />
			<Stack.Screen name="sync" options={{ headerShown: false, title: 'Sync' }} />
			<Stack.Screen
				name="auth"
				options={{
					title: 'Login',
					headerShown: false,
					presentation: 'formSheet',
					sheetAllowedDetents: [0.95, 1],
					gestureDirection: 'vertical',
					animation: 'slide_from_bottom',
					gestureEnabled: true
				}}
			/>
		</Stack>
	);
};

export default DrawerLayout;
