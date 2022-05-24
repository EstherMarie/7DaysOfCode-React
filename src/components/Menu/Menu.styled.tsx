import styled from 'styled-components';

export const StyledMenu = styled.header`
	display: flex;
	justify-content: space-between;

	margin-top: 10.16px;

	nav {
		height: 100%;
		display: flex;
		align-items: flex-end;
	}
`;

export const StyledList = styled.ul`
	display: flex;
	justify-content: space-between;

	li a {
		margin: 0 1rem;
	}

	li:last-child {
		font-weight: 600;
		margin-right: 0;
		margin-left: 38px;
	}

	@media (max-width: 992px) {
		li:nth-child(-n + 4) {
			display: none;
		}
	}
`;
