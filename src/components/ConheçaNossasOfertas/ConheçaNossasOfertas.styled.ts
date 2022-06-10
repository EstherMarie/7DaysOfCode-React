import styled from 'styled-components';

export const StyledConheçaNossasOfertas = styled.section`
	max-width: 1200px;
	margin: auto;
	margin-bottom: 153px;

	h2 {
		font-family: var(--font-title);
		font-size: 82px;
		font-weight: 900;
		line-height: 94px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 12px;

		margin-bottom: 5px;

		span {
			font-family: var(--font-body);
			font-size: 22px;
			font-weight: 400;
			line-height: 27px;
			color: var(--black);
			opacity: 0.5;
		}
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 30px;

		@media screen and (max-width: 1500px) {
			padding-inline: 15px;
		}
	}

	@media screen and (max-width: 600px) {
		h2 {
			font-size: 80px;
		}
	}
`;
