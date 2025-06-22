import React, { useState } from 'react';
import { View } from 'react-native';
import List from './list';
import type { Props } from './list.d';

const ListExample = () => {
	const [value, setValue] = useState(false);

	const sections: Props['sections'] = [
		{
			title: 'General',
			items: [
				{
					id: '11',
					title: 'Folder View',
					accessory: 'switch',
					switchValue: value,
					onSwitchChange: setValue
				}
			]
		}
	];

	return (
		<View style={{ flex: 1, width: '100%' }}>
			<List sections={sections} />
		</View>
	);
};

export default ListExample;
