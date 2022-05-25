import styled from "styled-components";

export const StyledComoConseguir = styled.section`
  width: 995px;
  height: 440px;

  margin: 228px auto 44px;
  background-color: var(--white);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  display: flex;

  .img-area {
    width: 585px;
    height: 100%;
    background-image: url("/assets/image-3.png");
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
          content: "";
          background-color: var(--main-color);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          /* opacity: 1; */

          margin-right: 16px;
        }
      }
    }
  }
`;
