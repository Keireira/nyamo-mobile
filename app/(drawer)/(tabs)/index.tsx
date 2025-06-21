import React from 'react';
import styled from 'styled-components/native';

import { Text, Wrapper } from '@ui';

const Container = styled.View`
	flex: 1;
	background-color: red;
`;

// Artist ID example: 0HNTpkAhM6OIso2Wef9bVb
// Album ID example: 3AZNic8DpklWZj9vx2YGrC
// Song ID example: 0bZBjrnvkDJ6cZMbUi4l2f
const Index = () => {
	return (
		<Container>
			<Wrapper>
				<Text>Index page</Text>
			</Wrapper>
		</Container>
	);
};

export default Index;
