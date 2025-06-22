import React from 'react';

import Root, {
	ListItemContent,
	ListItemLeft,
	ListItemRight,
	ListItemTitle,
	ListItemSubtitle,
	ListItemDetail,
	ChevronIcon,
	SwitchContainer
} from './list-item.styles';
import { View } from 'react-native';
import Switch from '../../switch';

import type { Props } from './list-item.d';

const ListItemComponent = ({
	title,
	subtitle,
	detail,
	onPress,
	showChevron = true,
	disabled = false,
	accessory = 'none',
	switchValue = false,
	onSwitchChange
}: Props) => {
	return (
		<Root onPress={onPress} disabled={disabled}>
			<ListItemContent>
				<ListItemLeft>
					<View>
						<ListItemTitle>{title}</ListItemTitle>
						{subtitle && <ListItemSubtitle>{subtitle}</ListItemSubtitle>}
					</View>
				</ListItemLeft>

				<ListItemRight>
					{detail && <ListItemDetail>{detail}</ListItemDetail>}
					{accessory === 'switch' && (
						<SwitchContainer>
							<Switch checked={switchValue} onCheckedChange={onSwitchChange} />
						</SwitchContainer>
					)}
					{showChevron && accessory !== 'switch' && <ChevronIcon>›</ChevronIcon>}
				</ListItemRight>
			</ListItemContent>
		</Root>
	);
};

export default ListItemComponent;
