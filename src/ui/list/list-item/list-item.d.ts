export type Props = {
	id: string;
	title: string;
	subtitle?: string;
	detail?: string;
	onPress?: () => void;
	showChevron?: boolean;
	disabled?: boolean;
	accessory?: 'switch' | 'none';
	switchValue?: boolean;
	onSwitchChange?: (value: boolean) => void;
};
