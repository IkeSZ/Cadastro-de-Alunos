import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { Section, Form, LoginTitle } from './styled';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    try {
      if (!isEmail(email)) {
        formErrors = true;

        toast.error('E-mail inválido');
      }

      if (password.length < 6 || password.length > 50) {
        formErrors = true;

        toast.error('Senha inválida');
      }

      if (formErrors) return;

      dispatch(actions.loginRequest({ email, password, prevPath }));
    } catch {
      toast.error('Senha inválida');
    }
  };

  return (
    <Section>
      <Loading isLoading={isLoading} />
      <LoginTitle>
        Faça seu login
        <br />
        no website
        <p>✴ Cadastro de Alunos</p>
      </LoginTitle>

      <Form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
          placeholder="Seu e-mail"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Sua senha"
        />

        <button type="submit">LOGAR</button>
      </Form>
    </Section>
  );
}
