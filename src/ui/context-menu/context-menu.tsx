import React from 'react';
import RNContextMenu from 'react-native-context-menu-view';

import type { ContextMenuProps } from 'react-native-context-menu-view';

const ContextMenu = ({ actions, children, ...restProps }: ContextMenuProps) => {
	return (
		<RNContextMenu actions={actions} fontName="Nunito" dropdownMenuMode {...restProps}>
			{children}
		</RNContextMenu>
	);
};

export default ContextMenu;
