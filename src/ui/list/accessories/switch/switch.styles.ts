import styled from 'styled-components/native';

export default styled.View`
	${'' /* So no switches are jumping when they are rendered */}
	flex: 1;
	min-height: 28px;
	display: flex;
	${'' /* gap between border and toggle, maybe use padding inside of list-item? */}
	padding-right: 20px;
	align-items: center;
	justify-content: center;
`;
