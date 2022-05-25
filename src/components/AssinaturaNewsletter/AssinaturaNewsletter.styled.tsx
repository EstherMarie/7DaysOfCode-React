import styled from "styled-components";

export const StyledNewsletter = styled.section`
  width: 585px;
  /* height: 462px; */

  margin-top: 151px;

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
      width: 481px;
      margin-top: 24px;

      font-family: var(--font-body);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      opacity: 0.5;
    }
  }

  form {
    width: 585px;
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

  /* Aqui se iniciam as gambiarras... */

  &::before {
    content: url("/assets/svg/vector.svg");
    /* width: 1000px; */
    position: absolute;
    z-index: -100;
    top: 0px;
    right: 0px;

    @media (max-width: 992px) {
      top: -90px;
    }
  }

  &::after {
    content: url("/assets/svg/imagem-hero.svg");
    width: 787px;
    position: absolute;
    top: -10px;
    right: 425px;
    z-index: -2;

    @media (max-width: 1919px) {
      content: "";
    }
  }
`;
