import React, { useEffect } from 'react';
import { useAppModel } from '@models';
import styled from 'styled-components/native';

import { Text, Wrapper } from '@ui';

const Container = styled.View`
	flex: 1;
	background-color: lightblue;
	opacity: 0.5;
`;

// Artist ID example: 0HNTpkAhM6OIso2Wef9bVb
// Album ID example: 3AZNic8DpklWZj9vx2YGrC
// Song ID example: 0bZBjrnvkDJ6cZMbUi4l2f
const Index = () => {
	const { events } = useAppModel();

	useEffect(() => {
		events.fireGetStarred2();

		// events.fireScrobble({
		// 	id: '0bZBjrnvkDJ6cZMbUi4l2f',
		// 	time: Date.now(),
		// 	submission: false
		// });

		// window.setTimeout(() => {
		// 	events.fireGetNowPlaying();
		// }, 1000);
	}, []);

	return (
		<Wrapper>
			<Container>
				<Text>Index page</Text>
			</Container>
		</Wrapper>
	);
};

export default Index;
