import { BlurView } from 'expo-blur';
import styled from 'styled-components/native';

export const TabButton = styled.Pressable`
	flex: 1;
	padding-top: 24px;
	padding-bottom: 16px;
`;

export default styled(BlurView)<{ $bottom: number }>`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	padding-bottom: ${({ $bottom }) => $bottom}px;
	z-index: 999;
	border-radius: 0;
	overflow: hidden;
`;
