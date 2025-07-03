type ContextActionT = 'picker' | 'button';

type ContextActionPickerT = {
	id: string;
	type: 'picker';
	title: string;
	selectedIndex: number;
	options: string[];
	onPress: (value: { nativeEvent: { index: number; label: string } }) => void;
};

type ContextActionButtonT = {
	id: string;
	type: 'button';
	title: string;
	systemIcon?: string;
	onPress: () => void;
};

export type AccessoryContextMenuT = {
	type: 'context-menu';
	trigger: string;
	actions: (ContextActionPickerT | ContextActionButtonT)[];
};
