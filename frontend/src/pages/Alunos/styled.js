import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    margin: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 20px 0 10px 0;
  color: ${colors.primaryColorLight};
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: 2px solid ${colors.primaryColorLight};
  margin-bottom: 30px;

  transition: all 300ms;
  &:hover {
    color: ${colors.secondPrimaryColor};
    border-bottom: 2px solid ${colors.secondPrimaryColor};
  }
`;

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
