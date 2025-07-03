import React from 'react';

import { Switch } from '@expo/ui/swift-ui';
import Root from './switch.styles';

import type { AccessorySwitchT } from './switch.d';

const SwitchAccessory = ({ value, onPress }: AccessorySwitchT) => {
	return (
		<Root>
			<Switch value={value} onValueChange={onPress} variant="switch" />
		</Root>
	);
};

export default SwitchAccessory;
