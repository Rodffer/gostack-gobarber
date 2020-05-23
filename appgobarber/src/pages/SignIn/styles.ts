import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: 'Gudea-Regular';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-family: 'Gudea-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #18121e;
  border-top-width: 1px;
  border-color: #264b8a;
  padding: 20px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #264b8a;
  font-size: 18px;
  font-family: 'Gudea-Regular';
  margin-left: 16px;
`;
