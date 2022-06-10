import styled from 'styled-components';

export const StyledOferta = styled.li`
	max-width: 380px;
	width: 100%;
	height: 200px;

	background-color: var(--white);

	box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

	display: grid;
	grid-template-columns: minmax(30%, 204px) 1fr;

	@media screen and (max-width: 400px) {
		grid-template-columns: 1fr 150px;
	}
	.img-area {
		max-width: 204px;
		height: 100%;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.text-area {
		padding-top: 27px;
		padding-bottom: 27px;
		padding-right: 5px;

		@media screen and (max-width: 400px) {
			padding-bottom: 10px;
		}

		h3 {
			font-family: var(--font-title);
			font-weight: 900;
			font-size: 32px;
			line-height: 37px;

			@media screen and (max-width: 400px) {
				font-size: 30px;
			}
		}

		.preco {
			margin-top: 8px;
			margin-bottom: 24px;

			font-family: var(--font-body);
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;

			opacity: 0.5;
		}

		.link-comprar {
			font-family: var(--font-body);
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;

			color: var(--main-color);

			&::after {
				content: url('/assets/svg/seta.svg');
				padding-left: 25px;
			}
		}
	}
`;
