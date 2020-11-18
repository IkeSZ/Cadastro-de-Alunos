import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { Nav, CdA, ContainerLinks } from './styled';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(actions.loginFailure());
    toast.success('Usuário deslogado');
    history.push('/');
  };

  return (
    <Nav>
      <CdA>Cadastro de Alunos</CdA>

      <ContainerLinks>
        <Link to="/">
          <p>Home</p>
        </Link>

        {isLoggedIn ? (
          <Link to="/register">
            <p>Editar dados</p>
          </Link>
        ) : (
          <Link to="/register">
            <p>Registrar</p>
          </Link>
        )}

        {isLoggedIn ? (
          <Link onClick={handleLogout} to="/logout">
            <p>Sair</p>
          </Link>
        ) : (
          <Link to="/login">
            <p>Entrar</p>
          </Link>
        )}
      </ContainerLinks>
    </Nav>
  );
}
