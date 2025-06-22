import React, { useState } from 'react';

import { Wrapper, List } from '@ui';
import type { Props } from '@ui/list/list.d';

const SettingsScreen = () => {
	const [value, setValue] = useState(false);

	const sections: Props['sections'] = [
		{
			id: '1',
			title: 'General',
			innerArray: [
				{
					id: '11',
					disabled: true,
					title: 'Folder View',
					accessory: 'switch',
					switchValue: value,
					onSwitchChange: setValue
				},
				{
					id: '12',
					title: 'Haptic Feedback',
					accessory: 'switch',
					switchValue: value,
					onSwitchChange: setValue
				},
				{
					id: '13',
					title: 'In-App Notifications',
					accessory: 'switch',
					switchValue: value,
					onSwitchChange: setValue
				}
			]
		},
		{
			id: '2',
			title: 'Appearance',
			innerArray: [
				{
					id: '23',
					title: 'Language',
					// accessory: 'context-menu',
					// pick available language
					detail: 'English'
				},
				{
					id: '21',
					title: 'Dark Mode',
					accessory: 'switch',
					switchValue: value,
					onSwitchChange: setValue
				}
			]
		},

		{
			id: '3',
			title: 'Playback',
			innerArray: [
				{
					id: '31',
					title: 'Crossfade'
					// accessory: 'drumroll',
					// 0..12 seconds, default 4
				},
				{
					id: '32',
					title: 'Skip Interval'
					// accessory: 'drumroll',
					// 5\10\15\20\30\45\60 seconds, default 15
				}
			]
		},

		{
			id: '4',
			title: 'Streaming',
			innerArray: [
				{
					id: '41',
					title: 'Bitrate'
					// accessory: 'context-menu',
					// pick available quality
				},
				{
					id: '42',
					title: 'Transcoding'
					// accessory: 'context-menu',
					// pick available audio formats to stream
					// raw | mp3 | none
				}
			]
		}
	];

	return (
		<Wrapper withBottom={false}>
			<List sections={sections} />
		</Wrapper>
	);
};

export default SettingsScreen;
