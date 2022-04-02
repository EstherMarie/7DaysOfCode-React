import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	max-width: 540px;
	margin: 0 auto;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 768px) {
		max-width: 720px;
	}

	@media (min-width: 992px) {
		max-width: 960px;
	}

	@media (min-width: 1920px) {
		max-width: 1203px;
	}
`;
