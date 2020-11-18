import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    color: #eee;
    padding: 0 10px;
    height: 40px;
    margin-bottom: 20px;
    border: 2px solid #121214;
    border-radius: 10px;
    background: #121214;

    transition: all 340ms;
    &:focus {
      border: 2px solid ${colors.primaryColorLight};
    }
  }
`;

export const ProfilePicture = styled.div`
  padding: 0 0 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
  }
`;

export const Titulo = styled.h1`
  text-align: center;
`;
