import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;

  padding-inline: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 1000px) {
    max-width: 960px;
  }

  @media (min-width: 1520px) {
    max-width: 1203px;
    padding-inline: unset;
  }
`;
