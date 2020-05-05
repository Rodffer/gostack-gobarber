import React, { useRef, useCallback } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../context/AuthContext';

import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';


import {Container, Content, Background} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatorio')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Digite obrigatorio')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
  }, [signIn]);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="BarberShop"/>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="login">
        <FiLogIn />
        Criar conta</a>
      </Content>
      <Background />
    </Container>
    );
}
  export default SignIn;
