import React from 'react';
import { Text, Wrapper } from '@ui';
import { Image, ImageBackground } from 'expo-image';

const Library = () => {
	return (
		<ImageBackground
			source="https://imageio.forbes.com/specials-images/imageserve/319986641/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
			style={{ width: '200%', height: '100%' }}
		>
			<Wrapper>
				<Text style={{ color: 'white' }}>Library</Text>
			</Wrapper>
		</ImageBackground>
	);
};

export default Library;
