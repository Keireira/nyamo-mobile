import React, { useRef, useState, useEffect } from 'react';
import appModel from '@models';
import { useGate } from 'effector-react';
import { useFonts } from 'expo-font';
import { withFactory, useFactoryModel } from '@lib/effector';
import * as SplashScreen from 'expo-splash-screen';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { TopBar, DrawerContent } from '@elements';
import { setNotificationHandler } from 'expo-notifications';
import SqlMigrations from '@src/sql-migrations';
import { Settings, AppState, Appearance } from 'react-native';
import type { AppStateStatus } from 'react-native';

SplashScreen.preventAutoHideAsync();

setNotificationHandler({
	handleNotification: async () => ({
		shouldShowBanner: true,
		shouldShowList: true,
		shouldPlaySound: false,
		shouldSetBadge: false
	})
});

const useThemeSettings = () => {
	const [theme, setTheme] = useState('system');
	const appState = useRef(AppState.currentState);

	useEffect(() => {
		const initialTheme = Settings.get('theme') || 'system';
		setTheme(initialTheme);

		const handleAppStateChange = (nextAppState: AppStateStatus) => {
			if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
				const currentTheme = Settings.get('theme');

				if (currentTheme !== theme) {
					setTheme(currentTheme);
					Appearance.setColorScheme(currentTheme);
				}
			}

			appState.current = nextAppState;
		};

		const subscription = AppState.addEventListener('change', handleAppStateChange);

		return () => subscription?.remove();
	}, [theme]);
};

const useSetDefaultSettings = () => {
	useThemeSettings();

	useEffect(() => {
		const isFolderView = Settings.get('folder_view');
		const isExtendedFeedback = Settings.get('extended_feedback');
		const isInAppNotifications = Settings.get('in_app_notifications');

		if (isFolderView === undefined) {
			Settings.set({ folder_view: false });
		}

		if (isExtendedFeedback === undefined) {
			Settings.set({ extended_feedback: true });
		}

		if (isInAppNotifications === undefined) {
			Settings.set({ in_app_notifications: true });
		}
	}, []);
};

const RootLayout = () => {
	const { gate } = useFactoryModel(appModel);

	useGate(gate, {
		username: 'admin',
		password: '4CmFMu#Pxd4dvbKjZaan',
		serverUrl: 'http://192.168.31.31:4533'
	});

	useSetDefaultSettings();

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
				<SqlMigrations />

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
