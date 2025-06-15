import React, { useEffect } from 'react';
import { useAppModel } from '@models';

import { Text, Wrapper } from '@ui';

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
			<Text>Index page</Text>
		</Wrapper>
	);
};

export default Index;
