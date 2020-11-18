import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Section = styled.div`
  color: #eee;
`;

export const CdA = styled.span`
  font-size: 0.5em;
  display: flex;
  margin-top: 65px;
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
`;

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 60px;
  border: 2px solid #202024;
  background: #202024;
  padding: 30px;
  padding-top: 4%;
  padding-bottom: 4%;
  border-radius: 15px;
  align-items: center;

  button {
    width: 92%;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
  }

  input {
    color: #eee;
    height: 40px;
    font-size: 1.1em;
    border: 2px solid #121214;
    background: #121214;
    padding: 30px;
    border-radius: 10px;
    margin-top: 5px;
    margin: 10px;

    transition: all 340ms;
    &:focus {
      border: 2px solid ${colors.primaryColorLight};
    }
  }
`;

export const Titulo = styled.h1`
  color: #eee;
  font-size: 3.5em;
  display: inline-flex;
  padding: 2%;
  margin-top: 200px;
  margin-left: 25%;
`;
