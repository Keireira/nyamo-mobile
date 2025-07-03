type ItemValue = string | number;

export type AccessoryDrumrollT = {
	type: 'drumroll';
	trigger: ItemValue;
	actions: {
		id: string;
		title: string;
		onPress: (value: ItemValue) => void;
	}[];
};
