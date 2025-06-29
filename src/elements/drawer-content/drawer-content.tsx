import React, { useState } from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import * as Haptics from 'expo-haptics';
import { usePathname, useRouter } from 'expo-router';
import { useGravatarUrl } from '@hooks';

import { Text, Avatar } from '@ui';
import { Switch } from '@expo/ui/swift-ui';
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
	const router = useRouter();
	const pathname = usePathname();
	const gravatarUrl = useGravatarUrl('github@alena.red');

	const insets = useSafeAreaInsets();
	const { height } = useWindowDimensions();
	const [value1, setValue1] = useState(false);

	const closeDrawer = () => {
		if (router.canDismiss()) {
			router.dismissAll();
		}

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
							<Avatar
								uri={gravatarUrl}
								alt="User's avatar"
								fallback="A"
								onPress={() => {
									router.navigate({
										pathname: '/users/[userId]',
										params: { userId: 'bacon' }
									});

									Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
								}}
							/>

							<Avatar
								alt="Add new user"
								color="lightgray"
								fallback="+"
								onPress={() => {
									router.navigate({
										pathname: '/(drawer)/auth'
									});

									Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
								}}
							/>
						</View>
					</ScrollView>
				</FadeEdgesView>

				<View style={{ marginTop: 48, gap: 24 }}>
					<NavItem
						hitSlop={16}
						onPress={() => {
							setValue1(!value1);
							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
						}}
					>
						<Label>Offline mode</Label>

						<Switch value={value1} onValueChange={setValue1} variant="switch" />
					</NavItem>

					<NavItem
						hitSlop={16}
						onPress={() => {
							router.navigate({
								pathname: '/(drawer)/downloads'
							});

							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
						}}
					>
						<Label>Downloads</Label>
					</NavItem>

					<NavItem
						hitSlop={16}
						onPress={() => {
							router.navigate({
								pathname: '/(drawer)/blacklist'
							});

							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
						}}
					>
						<Label>Blacklist</Label>
					</NavItem>

					<NavItem
						hitSlop={16}
						onPress={() => {
							router.navigate({
								pathname: '/(drawer)/settings'
							});

							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
						}}
					>
						<Label>Settings</Label>
					</NavItem>

					<NavItem
						hitSlop={16}
						onPress={() => {
							router.navigate({
								pathname: '/(drawer)/ai'
							});

							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
						}}
					>
						<Label>AI Scan</Label>
					</NavItem>

					<NavItem
						hitSlop={16}
						onPress={() => {
							router.navigate({
								pathname: '/(drawer)/sync'
							});

							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
						}}
					>
						<Label>Sync</Label>
					</NavItem>
				</View>

				{/* if not home */}
				<View
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						gap: 16
					}}
				>
					{!['/', '/library', '/search'].includes(pathname) && (
						<NavItem onPress={closeDrawer} hitSlop={16} style={{ justifyContent: 'flex-start' }}>
							<Ionicons name="arrow-back" size={24} color="black" />
							<ThickLabel>Home</ThickLabel>
						</NavItem>
					)}

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
