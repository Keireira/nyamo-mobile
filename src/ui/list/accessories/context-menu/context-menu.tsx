import React from 'react';

import { ContextMenu, Button, Picker } from '@expo/ui/swift-ui';
import { Trigger, TriggerText } from './context-menu.styles';

import type { AccessoryContextMenuT } from './context-menu.d';

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
				<Trigger>
					<TriggerText>{trigger}</TriggerText>
				</Trigger>
			</ContextMenu.Trigger>
		</ContextMenu>
	);
};

export default ContextMenuAccessory;
