import React from 'react';
import styled from 'styled-components/native';
import { scheduleNotificationAsync } from 'expo-notifications';

import { Button } from '@expo/ui/swift-ui';

const Root = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`;

const Wrapper = styled.View`
	position: relative;
`;

const DownloadsScreen = () => {
	const sendNotification = () => {
		scheduleNotificationAsync({
			content: {
				title: 'Sync finished',
				sound: false,
				interruptionLevel: 'active'
			},
			trigger: null
		});
	};

	return (
		<Root>
			<Wrapper>
				<Button onPress={sendNotification}>Send notification</Button>
			</Wrapper>
		</Root>
	);
};

export default DownloadsScreen;
