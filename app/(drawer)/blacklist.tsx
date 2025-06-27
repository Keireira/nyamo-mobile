import React from 'react';
import { Text } from '@ui';
import styled from 'styled-components/native';

const Root = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`;

const Title = styled(Text)`
	font-size: 24px;
	font-weight: bold;
`;

const Blacklist = () => (
	<Root>
		<Title>Blacklisted entities</Title>
	</Root>
);

export default Blacklist;
