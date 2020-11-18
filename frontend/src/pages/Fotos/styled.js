import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Titulo = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    color: #000;
    display: flex;
    background: #eee;
    align-items: center;
    justify-content: center;
    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;
    width: 180px;
    height: 180px;
    margin: 30px auto;
    cursor: pointer;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }

  input {
    display: none;
  }
`;
