import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="[userId]" options={{ headerShown: false }} />
		</Stack>
	);
};

export default Layout;
