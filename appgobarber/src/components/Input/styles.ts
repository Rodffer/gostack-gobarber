import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #1f222e;
  border-radius: 50px;
  margin-bottom: 8px;

  border-width: 2px;
  border-color: #1f222e;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #98463f;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #264b8a;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 17px;
  font-family: 'Gudea-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;
