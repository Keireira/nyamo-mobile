import React from 'react';
import { Text, Wrapper } from '@ui';
import { ImageBackground } from 'expo-image';
import { ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';

const ListTextTest = styled(Text)<{ $isLast: boolean }>`
	font-size: 36px;
	font-weight: 800;
	color: #add8e690;
	background-color: #ffb6c115;
	padding: 16px;
	margin-left: 8px;
	margin-right: 8px;
	border-radius: 8px;
	text-shadow: 2px 2px 2px pink;
	margin-top: 8px;

	${({ $isLast }) =>
		$isLast &&
		css`
			margin-bottom: 8px;
		`}
`;

const Library = () => {
	return (
		<ImageBackground
			source="https://kagi.com/proxy/11663afddd50578ede151ee722d5f3c8.png?c=5YigHpODNWx3qev9JrsT1HWdhFa0pugo_zGX_GPsn4B5frbLoz7EWzmS7YtoY5EIvt2KaM96lwGlc5M3fYKaPyjnF90-8cDzFJZiS1tiIxrRooDpn-R2t2g_kapv_5il"
			style={{ width: '100%', height: '100%' }}
		>
			<Wrapper>
				<ScrollView style={{ flex: 1 }}>
					{Array.from({ length: 25 }).map((_, index, arr) => (
						<ListTextTest key={index} $isLast={index === arr.length - 1}>
							{`${index + 1}`.padStart(2, '❦')}: 泉 こなた
						</ListTextTest>
					))}
				</ScrollView>
			</Wrapper>
		</ImageBackground>
	);
};

export default Library;
