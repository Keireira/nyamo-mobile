import React, { useState } from 'react';
import * as Haptics from 'expo-haptics';

import { Text, Switch } from '@ui';

import styled from 'styled-components/native';
import { Label } from '@react-navigation/elements';

const Root = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`;

const Title = styled(Text)`
	font-size: 24px;
	font-weight: bold;
`;

const NavItem = styled.Pressable`
	align-items: center;
	justify-content: space-between;
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

const SettingsScreen = () => {
	const [value, setValue] = useState(false);

	return (
		<Root>
			<Title>Settings</Title>

			<NavItem
				hitSlop={16}
				onPress={() => {
					setValue(!value);
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
				}}
			>
				<Label>Folders mode</Label>

				<Switch checked={value} onCheckedChange={setValue} />
			</NavItem>
		</Root>
	);
};

export default SettingsScreen;
