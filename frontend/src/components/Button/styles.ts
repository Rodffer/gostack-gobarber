import styled from 'styled-components';

export const Container = styled.button`
    background:transparent;
    height: 56px;
    border-radius: 50px;
    border:2px solid #264b8a ;
    padding: 0 16px;
    color: #264b8a;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    text-transform:uppercase;
    transition: background-color 0.2s;

      &:hover{
        color: #fff;
        background: #264b8a;
        transition-duration: 0.2s;
      }
`;
