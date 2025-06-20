import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as SwitchPrimitive from '@rn-primitives/switch';
import { useAnimatedStyle, useSharedValue, withSpring, interpolateColor } from 'react-native-reanimated';
import { SwitchContainer, SwitchThumb } from './switch.styles';

type SwitchProps = {
	checked?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	disabled?: boolean;
};

const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
	({ checked = false, onCheckedChange, disabled = false, ...props }, ref) => {
		const scale = useSharedValue(1);
		const progress = useSharedValue(checked ? 1 : 0);

		useEffect(() => {
			progress.value = withSpring(checked ? 1 : 0, {
				damping: 25,
				stiffness: 300,
				mass: 0.8
			});
		}, [checked]);

		const containerStyle = useAnimatedStyle(() => {
			const backgroundColor = interpolateColor(progress.value, [0, 1], ['#e5e7eb', '#34c759']);

			return {
				backgroundColor,
				opacity: disabled ? 0.4 : 1
			};
		});

		const thumbStyle = useAnimatedStyle(() => {
			const translateX = progress.value * 21;

			return {
				transform: [{ translateX }, { scale: scale.value }]
			};
		});

		const handlePress = () => {
			if (disabled) return;

			Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

			scale.value = withSpring(
				0.92,
				{
					damping: 15,
					stiffness: 400,
					mass: 0.6
				},
				() => {
					scale.value = withSpring(1, {
						damping: 15,
						stiffness: 400,
						mass: 0.6
					});
				}
			);

			onCheckedChange?.(!checked);
		};

		return (
			<Pressable ref={ref} onPress={handlePress} disabled={disabled}>
				<SwitchContainer style={containerStyle} {...props}>
					<SwitchThumb style={thumbStyle} />
				</SwitchContainer>
			</Pressable>
		);
	}
);

export default Switch;
