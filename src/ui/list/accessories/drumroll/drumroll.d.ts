export type AccessoryDrumrollT = {
	type: 'drumroll';
	trigger: string | number;
	onPress: (event: { nativeEvent: { index: number; label: string } }) => void;
	actions: {
		id: string;
		value: string | number;
		title: string;
	}[];
};
