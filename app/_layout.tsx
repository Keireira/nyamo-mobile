import React, { useEffect } from 'react';
import appModel from '@models';
import { useGate } from 'effector-react';
import { useFonts } from 'expo-font';
import { withFactory, useFactoryModel } from '@lib/effector';
import * as SplashScreen from 'expo-splash-screen';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { TopBar, DrawerContent } from '@elements';

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
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Drawer
					screenOptions={{
						header: (props) => <TopBar {...props} />,
						swipeEdgeWidth: 50,
						swipeMinDistance: 50,
						drawerType: 'front',
						drawerPosition: 'right',
						drawerHideStatusBarOnOpen: false
					}}
					drawerContent={(props) => <DrawerContent {...props} />}
				>
					<Drawer.Screen name="(drawer)" />
				</Drawer>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
};

const WrappedRoot = withFactory({
	Component: RootLayout,
	factory: appModel
});

export default WrappedRoot;
