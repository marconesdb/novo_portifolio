import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
  background-color: #f5f5f5;
  }

  body, button, input {
  font-family: 'Fira Code', sans-serif;
  }
  button {
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
    
  }
`;

