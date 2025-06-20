import React, { useState } from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import * as Haptics from 'expo-haptics';

import { Text, Switch } from '@ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';

const FadeEdgesView = ({ children, style }) => {
	return (
		<MaskedView
			style={[{ flex: 1 }, style]}
			maskElement={
				<LinearGradient
					colors={['transparent', 'black', 'black', 'transparent']}
					locations={[0, 0.05, 0.95, 1]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={{ flex: 1 }}
				/>
			}
		>
			{children}
		</MaskedView>
	);
};

const NavItem = styled.Pressable`
	align-items: center;
	justify-content: space-between;
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

const Label = styled(Text)`
	font-size: 24px;
	font-weight: 500;
`;

const ThickLabel = styled(Text)`
	font-size: 28px;
	font-weight: 600;
`;

const DrawerContent = (props: DrawerContentComponentProps) => {
	const insets = useSafeAreaInsets();
	const { height } = useWindowDimensions();
	const [value, setValue] = useState(false);
	const [value1, setValue1] = useState(false);

	const closeDrawer = () => {
		props.navigation.navigate('(tabs)');
		props.navigation.closeDrawer();
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
	};

	return (
		<ScrollView
			style={{
				paddingTop: insets.top + 32,
				paddingBottom: insets.bottom || 16,
				paddingLeft: 32,
				paddingRight: 32
			}}
		>
			<View
				style={{
					position: 'relative',
					minHeight: height - 32 - insets.top - (insets.bottom || 16)
				}}
			>
				<FadeEdgesView style={{ height: 108, maxHeight: 108, marginRight: -16, marginLeft: -16 }}>
					<ScrollView
						horizontal
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						snapToInterval={120}
						decelerationRate="fast"
						snapToStart
					>
						<View
							style={{
								gap: 24,
								display: 'flex',
								flexDirection: 'row',
								paddingLeft: 16,
								paddingRight: 16
							}}
						>
							<View
								style={{
									height: 96,
									backgroundColor: 'lightblue',
									width: 96,
									borderRadius: 42,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>A</Text>
							</View>

							<View
								style={{
									height: 96,
									backgroundColor: 'lightpink',
									width: 96,
									borderRadius: 42,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>19</Text>
							</View>

							<View
								style={{
									height: 96,
									backgroundColor: 'lightgreen',
									width: 96,
									borderRadius: 42,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>4</Text>
							</View>

							<View
								style={{
									height: 96,
									backgroundColor: 'lightgray',
									width: 96,
									borderRadius: 42,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									opacity: 0.5
								}}
							>
								<Text style={{ fontSize: 48, fontWeight: 400, color: 'white' }}>+</Text>
							</View>
						</View>
					</ScrollView>
				</FadeEdgesView>

				<View style={{ marginTop: 48, gap: 24 }}>
					<NavItem
						hitSlop={16}
						onPress={() => {
							setValue(!value);
							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
						}}
					>
						<Label>Folders mode</Label>

						<Switch checked={value} onCheckedChange={setValue} />
					</NavItem>

					<NavItem
						hitSlop={16}
						onPress={() => {
							setValue1(!value1);
							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
						}}
					>
						<Label>Offline mode</Label>

						<Switch checked={value1} onCheckedChange={setValue1} />
					</NavItem>

					<NavItem
						hitSlop={16}
						onPress={() => {
							props.navigation.navigate('downloads');
							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
						}}
					>
						<Label>Downloads</Label>
					</NavItem>

					<NavItem
						hitSlop={16}
						onPress={() => {
							props.navigation.navigate('settings');
							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
						}}
					>
						<Label>Settings</Label>
					</NavItem>
				</View>

				<View
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						gap: 16
					}}
				>
					<NavItem onPress={closeDrawer} hitSlop={16} style={{ justifyContent: 'flex-start' }}>
						<Ionicons name="arrow-back" size={24} color="black" />
						<ThickLabel>Back</ThickLabel>
					</NavItem>

					<View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
						<Text>v. 1.2.123</Text>
						<Text>{'|'}</Text>
						<Text>GitHub</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default DrawerContent;
