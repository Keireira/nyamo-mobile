import type { ColorSchemeName } from 'react-native';

export type SettingsChangedEventPayload = {
	key: string | 'theme';
	timestamp: number;
	source: 'app' | 'ios_settings';
	oldValue: ColorSchemeName;
	newValue: ColorSchemeName;
};

export type SettingsBridgeModuleEvents = {
	onSettingsChanged: (params: SettingsChangedEventPayload) => void;
};
