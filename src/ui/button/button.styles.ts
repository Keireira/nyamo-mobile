import styled from 'styled-components/native';
import { Text } from '../typography';
import Animated from 'react-native-reanimated';

export const BtnText = styled(Text)`
	color: white;
	font-size: 18px;
`;

export default styled(Animated.View)`
	align-items: center;
	justify-content: center;
	flex-direction: row;
	height: 48px;
	width: 100%;
	border-radius: 16px;
	background-color: #333;
`;
