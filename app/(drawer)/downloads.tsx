import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Text } from '@ui';
import { Picker } from '@expo/ui/swift-ui';

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
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<Root>
			<Wrapper>
				<Text style={{ marginBottom: 16, fontSize: 24 }}>Selected: {selectedIndex}</Text>

				<Picker
					options={['$', '$$', '$$$', '$$$$']}
					selectedIndex={selectedIndex}
					onOptionSelected={({ nativeEvent: { index } }) => {
						setSelectedIndex(index);
					}}
					variant="wheel"
				/>
			</Wrapper>
		</Root>
	);
};

export default DownloadsScreen;
