import React from 'react';

import { SwitchAccessory, DrumrollAccessory, ContextMenuAccessory } from '../accessories';
import Root, { ListItemContent, ListItemLeft, ListItemRight, ListItemTitle } from './list-item.styles';

import type { Props } from './list-item.d';

const ListItemComponent = ({ title, accessory }: Props) => {
	return (
		<Root>
			<ListItemContent>
				<ListItemLeft>
					<ListItemTitle>{title}</ListItemTitle>
				</ListItemLeft>

				<ListItemRight>
					{accessory.type === 'switch' && <SwitchAccessory {...accessory} />}
					{accessory.type === 'context-menu' && <ContextMenuAccessory {...accessory} />}
					{accessory.type === 'drumroll' && <DrumrollAccessory {...accessory} />}
				</ListItemRight>
			</ListItemContent>
		</Root>
	);
};

export default ListItemComponent;
