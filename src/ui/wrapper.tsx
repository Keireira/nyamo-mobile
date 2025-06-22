import React from 'react';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Root = styled.View`
	flex: 1;
	padding-top: ${({ $insets, $withTop }) => ($withTop ? $insets.top + 42 : 0)}px;
	padding-bottom: ${({ $insets, $withBottom }) => ($withBottom ? $insets.bottom + 64 : 0)}px;
`;

const Wrapper = ({ children, withTop = true, withBottom = true, ...props }) => {
	const insets = useSafeAreaInsets();

	return (
		<Root {...props} $insets={insets} $withTop={withTop} $withBottom={withBottom}>
			{children}
		</Root>
	);
};

export default Wrapper;
