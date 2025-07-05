import { useEffect } from 'react';
import { Appearance } from 'react-native';
import SettingsBridgeModule from '@modules/settings-bridge';

const SyncSettings = () => {
	useEffect(() => {
		SettingsBridgeModule.addListener('onSettingsChanged', (event) => {
			Appearance.setColorScheme(event.newValue);
		});

		return () => {
			SettingsBridgeModule.removeAllListeners('onSettingsChanged');
		};
	}, []);

	return null;
};

export default SyncSettings;
