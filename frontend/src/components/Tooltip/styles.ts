import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #264b8a;
    padding: 8px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.5s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    color: #2e2e2e;

    &::before {
      content: '';
      border-style: solid;
      border-color: #264b8a transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      bottom: 20px;
      position: absolute;
      left: 50%;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
