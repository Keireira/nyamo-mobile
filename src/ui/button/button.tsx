import React from 'react';
import * as Haptics from 'expo-haptics';
import { Pressable } from 'react-native';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import Root, { BtnText } from './button.styles';

const Button = ({ text = '', onPress = () => {}, ...restProps }) => {
	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: scale.value }]
		};
	});

	const handlePressIn = () => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);

		scale.value = withSpring(0.98, {
			damping: 15,
			stiffness: 300
		});
	};

	const handlePressOut = () => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

		scale.value = withSpring(1, { damping: 15, stiffness: 300 });
	};

	const onPressHandler = () => {
		if (!onPress) return;

		onPress();
	};

	return (
		<Pressable onPress={onPressHandler} onPressIn={handlePressIn} onPressOut={handlePressOut} {...restProps}>
			<Root style={animatedStyle}>
				<BtnText>{text}</BtnText>
			</Root>
		</Pressable>
	);
};

export default Button;
