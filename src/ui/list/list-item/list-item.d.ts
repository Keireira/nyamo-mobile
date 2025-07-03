import type { AccessoryContextMenuT, AccessorySwitchT, AccessoryDrumrollT } from '../accessories';

export type AccessoryT = AccessorySwitchT | AccessoryContextMenuT | AccessoryDrumrollT;

export type Props = {
	id: string;
	title: string;
	accessory: AccessoryT;
};
