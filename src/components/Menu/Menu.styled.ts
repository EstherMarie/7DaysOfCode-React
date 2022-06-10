import styled from "styled-components";

interface StyledMenuProps {
  hasScroll: boolean;
}

interface StyledListProps {
  isListShowing: boolean;
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

  > section {
    position: relative;
  }

  nav {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
`;

export const StyledMenuIcon = styled.button`
  display: none;

  background-color: transparent;
  width: 35px;
  /* height: 30px; */

  cursor: pointer;

  transition: all 0.2;

  svg {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const StyledList = styled.ul<StyledListProps>`
  display: flex;
  justify-content: space-between;

  transition: all 0.2;

  li a {
    margin: 0 1rem;
  }

  li:last-child {
    font-weight: 600;
    margin-right: 0;
    margin-left: 38px;
  }

  li:nth-child(-n + 4) {
    &::after {
      content: " /";
    }
  }

  @media (max-width: 1000px) {
    position: absolute;
    top: 59px;
    right: 5px;

    padding-top: 10px;

    background-color: ${(props) => (props.hasScroll ? "var(--white)" : "")};

    box-shadow: ${(props) =>
      props.hasScroll ? "10px 10px 30px rgba(0, 0, 0, 0.06)" : "none"};

    border-left: ${(props) =>
      props.hasScroll ? "1px solid rgba(32, 32, 32, 0.16)" : "none"};
    border-right: ${(props) =>
      props.hasScroll ? "1px solid rgba(32, 32, 32, 0.16)" : "none"};
    border-bottom: ${(props) =>
      props.hasScroll ? "1px solid rgba(32, 32, 32, 0.16)" : "none"};

    display: ${(props) => (props.isListShowing ? "flex" : "none")};

    flex-direction: column;
    gap: 10px;
    align-items: end;

    li {
      width: 100%;
      padding: 16px 0;

      display: flex;
      justify-content: flex-end;

      border-bottom: ${(props) =>
        props.hasScroll ? "1px solid rgba(32, 32, 32, 0.16)" : "none"};
    }

    li:nth-child(-n + 4) {
      &::after {
        content: " ";
      }
    }
  }
`;
