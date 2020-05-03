import styled from 'styled-components'
import { shade } from 'polished';

import signipbackground from '../../assets/sign-up-background.jpg';

export const Container = styled.div `
 border-top: 5px solid #1f4e8c;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 16px;
  }

  input[type='password']{
        color:#1f4e8c !important;
      }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #1f4e8c;
    }
  }

  > a {
    color: #FFF;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    font-weight: bold;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#1f4e8c')};
    }
  }
`;

export const Background = styled.div `
  filter: grayscale(75%);
  flex: 1;
  background: url(${signipbackground}) no-repeat center;
  background-size: cover;
`;
