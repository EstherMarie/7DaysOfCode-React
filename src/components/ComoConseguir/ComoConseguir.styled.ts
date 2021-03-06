import styled from 'styled-components';

export const StyledComoConseguir = styled.div`
	max-width: 995px;
	width: 100%;
	height: 440px;

	margin: 228px auto 44px;
	background-color: var(--white);
	box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

	display: flex;

	.img-area {
		width: 585px;
		height: 100%;
		background-image: url('/assets/images/image-3.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.text-area {
		padding: 58px 81px 43px 32px;

		h2 {
			font-family: var(--font-title);
			font-size: 42px;
			font-weight: 900;
			line-height: 48px;

			span {
				font-family: var(--font-body);
				font-size: 22px;
				font-weight: 400;
				line-height: 26.82px;
				color: var(--black);
				opacity: 0.5;

				display: block;
			}
		}

		ol {
			margin-top: 32px;

			display: flex;
			flex-direction: column;
			gap: 32px;

			li {
				font-family: var(--font-body);
				font-weight: 400;
				font-size: 22px;
				line-height: 26px;
				opacity: 0.5;

				display: flex;
				align-items: center;

				height: 52px;

				&::before {
					content: '';
					background-color: var(--main-color);
					/* width: 52px;
					height: 52px; */
					border-radius: 50%;
					padding: 26px;
					/* opacity: 1; */

					margin-right: 16px;

					@media screen and (max-width: 400px) {
						padding: 20px;
					}
				}
			}
		}

		@media screen and (max-width: 1540px) {
			padding-right: 65px;
		}

		@media screen and (max-width: 600px) {
			padding-inline: 20px;

			h2 {
				font-size: 38px;
			}
		}
	}

	@media screen and (max-width: 1000px) {
		flex-direction: column;
		height: 860px;

		.img-area {
			width: 100%;
		}
	}

	@media screen and (max-width: 768px) {
		height: 640px;
	}
`;
