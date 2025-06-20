import styled from 'styled-components/native';

import { Text } from '@ui';
import { BlurView } from 'expo-blur';

export const Title = styled(Text)`
	color: white;
	font-weight: 700;
	font-size: 18px;
	flex: 1;
	text-align: center;
	margin-left: -24px;
	text-transform: uppercase;
	text-shadow-color: cyan;
	text-shadow-offset: 1px 2px;
	text-shadow-radius: 2px;
	letter-spacing: 2px;
`;

export default styled(BlurView).attrs({
	intensity: 30,
	tint: 'dark'
})<{ $top: number }>`
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	top: 0;
	left: 0;
	right: 0;
	padding-top: ${({ $top }) => $top}px;
	padding-left: 16px;
	padding-right: 16px;
	padding-bottom: 12px;
	color: white;
`;
