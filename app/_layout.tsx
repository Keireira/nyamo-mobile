import React, { useEffect } from 'react';
import { useGate } from 'effector-react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { withFactory, useFactoryModel } from '@lib/effector';
import appModel from '@models';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const { gate } = useFactoryModel(appModel);

	useGate(gate, {
		username: 'admin',
		password: '4CmFMu#Pxd4dvbKjZaan',
		serverUrl: 'http://192.168.31.31:4533'
	});

	const [loaded] = useFonts({
		Nunito: require('@assets/fonts/Nunito/Nunito-VariableFont_wght.ttf')
	});

	useEffect(() => {
		if (!loaded) return;

		SplashScreen.hideAsync();
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			</Stack>
		</SafeAreaProvider>
	);
};

const WrappedRoot = withFactory({
	Component: RootLayout,
	factory: appModel
});

export default WrappedRoot;
