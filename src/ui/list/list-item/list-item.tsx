import React from 'react';

import { Pressable } from 'react-native';
import { Switch, ContextMenu, Button, Picker } from '@expo/ui/swift-ui';
import Root, { ListItemContent, ListItemLeft, ListItemRight, ListItemTitle, SwitchContainer } from './list-item.styles';

import type { AccessoryContextMenuT, AccessorySwitchT, Props } from './list-item.d';
import { Text } from '../../typography';

const SwitchAccessory = ({ value, onPress }: AccessorySwitchT) => {
	return (
		<SwitchContainer>
			<Switch value={value} onValueChange={onPress} variant="switch" />
		</SwitchContainer>
	);
};

const ContextMenuAccessory = ({ actions, trigger }: AccessoryContextMenuT) => {
	return (
		<ContextMenu>
			<ContextMenu.Items>
				{actions.map((action) => {
					if (action.type === 'button') {
						return (
							<Button key={action.id || action.title} systemImage={action.systemIcon} onPress={action.onPress}>
								{action.title}
							</Button>
						);
					}

					if (action.type === 'picker') {
						return (
							<Picker
								key={action.id || action.title}
								label={action.title}
								options={action.options}
								variant="menu"
								selectedIndex={action.selectedIndex}
								onOptionSelected={action.onPress}
							/>
						);
					}

					return null;
				})}
			</ContextMenu.Items>

			<ContextMenu.Trigger>
				<Pressable
					style={{
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'center',
						height: '100%'
					}}
				>
					<Text
						style={{
							textAlign: 'right',
							fontSize: 18,
							color: '#666'
						}}
					>
						{trigger || 'no'}
					</Text>
				</Pressable>
			</ContextMenu.Trigger>
		</ContextMenu>
	);
};

const ListItemComponent = ({ title, onPress, accessory }: Props) => {
	return (
		<Root onPress={onPress}>
			<ListItemContent>
				<ListItemLeft>
					<ListItemTitle>{title}</ListItemTitle>
				</ListItemLeft>

				<ListItemRight>
					{accessory?.type === 'switch' && <SwitchAccessory {...accessory} />}
					{accessory?.type === 'context-menu' && <ContextMenuAccessory {...accessory} />}
				</ListItemRight>
			</ListItemContent>
		</Root>
	);
};

export default ListItemComponent;
