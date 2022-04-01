import styled from 'styled-components';

export const StyledMenu = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const StyledList = styled.ul`
	display: flex;
	justify-content: space-between;

	li:nth-child(-n + 4) {
		&::after {
			content: ' /';
		}
	}
`;
