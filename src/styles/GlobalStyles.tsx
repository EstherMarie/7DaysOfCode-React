import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  :root {
    /* Colors */
    --black: #202020;
    --white: #ffffff;
    --main-color: #ffcb47;

    /* Fonts */
    --font-title: "Elsie Swash Caps", cursive;
    --font-body: "Montserrat", sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }

  button,
  label,
  input,
  span, 
  p,
  a {
    font-family: var(--font-body);
    font-size: 1.6rem;
    color: var(--black);
    border: none;
  }

  li {
    list-style: none;
  }
`;
