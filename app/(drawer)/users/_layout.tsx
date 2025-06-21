import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
	return (
		<Stack screenOptions={{ headerShown: false, animation: 'none' }}>
			<Stack.Screen name="[userId]" options={{ headerShown: false, animation: 'none' }} />
		</Stack>
	);
};

export default Layout;
