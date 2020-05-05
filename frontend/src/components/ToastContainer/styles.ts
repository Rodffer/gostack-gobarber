import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'error' | 'sucess';
  hasDescription: boolean;
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

const toastTypeVariantions = {
  info: css`
    background: -webkit-linear-gradient(-90deg,  #264b8a -40%, #ebf8ff 100%);
    color: #264b8a;
  `,
  sucess: css`
    background: -webkit-linear-gradient(-90deg,  #2e656a -40%, #e6fffa 100%);
    color: #2e656a;
`,
  error: css`
    background: -webkit-linear-gradient(-90deg,  #98463f -40%, #fddede 100%);
    color: #98463f;
    `,
}

export const Toast = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px; rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariantions[props.type || 'info']}
  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) => !props.hasDescription &&
  css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}
`;
