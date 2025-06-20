import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const SwitchContainer = styled(Animated.View)`
	position: relative;
	width: 64px;
	height: 30px;
	border-radius: 16px;
	background-color: #e5e7eb;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border: 0.5px solid rgba(0, 0, 0, 0.08);
`;

export const SwitchThumb = styled(Animated.View)`
	position: absolute;
	top: 2px;
	left: 3px;
	width: 36px;
	height: 24px;
	border-radius: 12px;
	background-color: white;
	shadow-color: #000;
	shadow-offset: 0px 1px;
	shadow-opacity: 0.12;
	shadow-radius: 2px;
	elevation: 2;
	border: 0.5px solid rgba(0, 0, 0, 0.06);
`;

export const SwitchWrapper = styled.View`
	align-items: center;
	justify-content: center;
`;
