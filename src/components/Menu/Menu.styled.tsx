import styled from "styled-components";

interface StyledMenuProps {
  hasScroll: boolean;
}

export const StyledMenu = styled.header<StyledMenuProps>`
  position: fixed;
  width: 100%;
  z-index: 9000;

  display: flex;
  justify-content: space-between;

  padding-top: 10.16px;
  padding-bottom: 10.16px;

  transition: all 0.2s;

  border-bottom: ${(props) =>
    props.hasScroll ? "1px solid rgba(32, 32, 32, 0.16)" : ""};

  background-color: ${(props) => (props.hasScroll ? "var(--white)" : "")};

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
