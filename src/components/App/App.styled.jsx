import { css } from '@emotion/react';

export const GlobalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    padding: 20px;

    font-family: 'Montserrat', sans-serif;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`;
