import styled from "styled-components";

export const StyledNewsletter = styled.section`
  max-width: 585px;
  width: 100%;
  /* height: 462px; */

  margin-top: 210px;

  position: relative;

  .text-area {
    margin-bottom: 37px;

    h1 {
      div {
        margin-bottom: 12px;

        font-family: var(--font-body);
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        color: var(--black);
        opacity: 0.5;
      }

      font-family: var(--font-title);
      font-weight: 900;
      font-size: 82px;
      line-height: 94px;
      opacity: unset;
    }

    p {
      max-width: 481px;
      margin-top: 24px;

      font-family: var(--font-body);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      opacity: 0.5;

      @media (max-width: 1520px) {
        max-width: 423px;
      }
    }
  }

  form {
    max-width: 585px;
    height: 75px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    input {
      height: 100%;
      width: calc(585px - 184px);

      padding-left: 55px;

      background-image: url("/assets/svg/mail.svg");
      background-size: 21.57px 9.96px;
      background-repeat: no-repeat;
      background-position-x: 17.43px;
      background-position-y: center;
    }

    button {
      height: 100%;
      width: 194px;

      background-color: var(--main-color);
      color: var(--white);

      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  &::after {
    content: url("/assets/svg/imagem-hero.svg");
    position: absolute;
    top: -205px;
    left: 362px;
    z-index: -2;

    @media (max-width: 1520px) {
      left: 221px;
    }

    @media (max-width: 1000px) {
      content: "";
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 160px;
  }

  @media screen and (max-width: 500px) {
    .text-area {
      h1 {
        font-size: 60px;
      }
    }

    form {
      flex-direction: column;

      input,
      button {
        width: 100%;
        margin-top: 15px;
        padding-top: 15px;
        padding-bottom: 15px;
      }
    }
  }
`;
