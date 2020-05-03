import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: -webkit-linear-gradient(45deg,  #1f222e 0%, #35394a 100%);
    border-radius: 50px;

    border: 1.5px solid #18121e;
    color: #666360;

    padding: 16px;
    width: 100%;
    letter-spacing: 1px;
    text-align: center;
    -webkit-transition-timing-function: cubic-bezier(0.68, -0.25, 0.265, .85);

    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    ${(props) => props.isErrored && css`
      border: 1.5px solid #98463f;
    `}

    ${(props) => props.isFocused && css`
      color: #264b8a;
      border: 1.5px solid #264b8a;
    `}

    ${(props) => props.isFilled && css`
      color: #264b8a;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #98463f;
    color: #fff;

    &::before {
      border-color: #98463f transparent;
    }
  }
`;
