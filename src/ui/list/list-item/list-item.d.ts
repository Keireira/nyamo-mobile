import type React from 'react';

export type AccessorySwitchT = {
	type: 'switch';
	value: boolean;
	onPress: (value: boolean) => void;
};

export type AccessoryContextMenuT = {
	type: 'context-menu';
	children: React.ReactNode;
};

export type AccessoryDrumrollT = {
	type: 'drumroll';
	value: string | number;
	onValueChange: (value: string | number) => void;
};

export type AccessoryT = AccessorySwitchT | AccessoryContextMenuT | AccessoryDrumrollT;

export type Props = {
	id: string;
	title: string;
	onPress?: () => void;
	accessory?: AccessoryT | undefined;
};
