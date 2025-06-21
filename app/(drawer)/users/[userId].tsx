import React from 'react';

import { Wrapper, Text, Button } from '@ui';
import { useLocalSearchParams } from 'expo-router';

const Users = () => {
	const { userId } = useLocalSearchParams();

	return (
		<Wrapper>
			<Text>Username: {userId}</Text>
			<Text>E-Mail: mail@example.com</Text>
			<Text>URL: http://192.168.31.31:4084, https://subsonic.example.com</Text>
			<Text>[Add new server alias]</Text>
			<Text>Version: 1.16.1</Text>

			<Button
				text="Update password"
				onPress={() => {
					console.log('update password');
				}}
			/>
			<Button
				text="Logout"
				onPress={() => {
					console.log('logout');
				}}
			/>
		</Wrapper>
	);
};

export default Users;
