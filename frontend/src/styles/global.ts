import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0ch;

    ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #112a4a;
  }
  }

  body {
    background: -webkit-linear-gradient(-90deg,  #112a4a  0%, #18121e 100%);
    color: #F2F2F2;
    -webkit-font-smoothing: antialiased;

    ::-webkit-input-placeholder {
    color: #4E546D

  }
  }

  body, input, button {
    font-family: 'Gudea', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
