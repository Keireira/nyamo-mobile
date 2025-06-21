import React from 'react';
import { Wrapper, Text } from '@ui';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const LoginUser = () => {
	const router = useRouter();

	const handleDismiss = () => {
		if (router.canDismiss()) {
			router.dismissAll();
		}
	};

	return (
		<Wrapper>
			<Text>Add User</Text>

			<Pressable onPress={handleDismiss}>
				<Text>Dismiss</Text>
			</Pressable>
		</Wrapper>
	);
};

export default LoginUser;
