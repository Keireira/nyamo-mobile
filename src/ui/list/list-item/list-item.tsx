import React from 'react';

import Switch from '../../switch';
import ContextMenu from '../../context-menu';
import Root, { ListItemContent, ListItemLeft, ListItemRight, ListItemTitle, SwitchContainer } from './list-item.styles';

import type { AccessoryContextMenuT, AccessorySwitchT, Props } from './list-item.d';

const SwitchAccessory = ({ value, onPress }: AccessorySwitchT) => {
	return (
		<SwitchContainer>
			<Switch checked={value} onCheckedChange={onPress} />
		</SwitchContainer>
	);
};

const ContextMenuAccessory = ({ actions, children, ...restProps }: AccessoryContextMenuT) => {
	return (
		<ContextMenu actions={actions} {...restProps}>
			{children}
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
