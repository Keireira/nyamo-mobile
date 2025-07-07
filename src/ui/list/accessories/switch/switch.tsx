import React from 'react';

import { Switch } from 'react-native';
import Root from './switch.styles';

import type { AccessorySwitchT } from './switch.d';

const SwitchAccessory = ({ value, onPress }: AccessorySwitchT) => {
	return (
		<Root>
			<Switch value={value} onValueChange={onPress} hitSlop={20} />
		</Root>
	);
};

export default SwitchAccessory;
