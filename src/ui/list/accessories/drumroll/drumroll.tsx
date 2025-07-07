import React from 'react';

import { View } from 'react-native';
import { BottomSheet, Picker } from '@expo/ui/swift-ui';
import { Trigger, TriggerText } from './drumroll.styles';

import type { AccessoryDrumrollT } from './drumroll.d';

const DrumrollAccessory = ({ actions, trigger, onPress }: AccessoryDrumrollT) => {
	const [isOpened, setIsOpened] = React.useState(false);

	return (
		<View>
			<BottomSheet isOpened={isOpened} onIsOpenedChange={setIsOpened}>
				<Picker
					options={actions.map((action) => action.title)}
					variant="wheel"
					selectedIndex={0}
					onOptionSelected={onPress}
					style={{ height: 200 }}
				/>
			</BottomSheet>

			<Trigger onPress={() => setIsOpened(true)}>
				<TriggerText>{trigger}</TriggerText>
			</Trigger>
		</View>
	);
};

export default DrumrollAccessory;
