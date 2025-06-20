import React from 'react';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Root = styled.View`
	flex: 1;
	padding-top: ${({ $insets }) => $insets.top + 42}px;
	padding-bottom: ${({ $insets }) => $insets.bottom + 64}px;
`;

const Wrapper = ({ children, ...props }) => {
	const insets = useSafeAreaInsets();

	return (
		<Root {...props} $insets={insets}>
			{children}
		</Root>
	);
};

export default Wrapper;
