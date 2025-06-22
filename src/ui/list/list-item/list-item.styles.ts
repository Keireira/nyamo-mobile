import styled from 'styled-components/native';
import { Text } from '../../typography';

export const ListItemContent = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const ListItemLeft = styled.View`
	flex-direction: row;
	align-items: center;
	flex: 1;
`;

export const ListItemRight = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ListItemTitle = styled(Text)`
	font-size: 17px;
	color: #000;
	font-weight: 400;
`;

export const ListItemSubtitle = styled(Text)`
	font-size: 15px;
	color: #8e8e93;
	margin-top: 2px;
`;

export const ListItemDetail = styled(Text)`
	font-size: 17px;
	color: #8e8e93;
	margin-right: 8px;
`;

export const ChevronIcon = styled(Text)`
	font-size: 16px;
	color: #c7c7cc;
	margin-left: 8px;
`;

export const SwitchContainer = styled.View`
	margin-left: 8px;
`;

export default styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	padding-vertical: 12px;
	padding-horizontal: 16px;
	min-height: 44px;
	background-color: white;
`;
