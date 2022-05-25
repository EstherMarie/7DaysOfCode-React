import styled from "styled-components";

export const StyledConheçaNossasOfertas = styled.section`
  width: 1200px;
  margin: auto;
  margin-bottom: 153px;

  h2 {
    font-family: var(--font-title);
    font-size: 82px;
    font-weight: 900;
    line-height: 94px;

    display: flex;
    flex-direction: column;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;
