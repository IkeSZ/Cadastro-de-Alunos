import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Section = styled.div`
  color: #fff;
  margin-top: 20px;
  margin-left: 480px;
`;

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 60px;
  border: 2px solid #202024;
  background: #202024;
  padding: 20px;
  padding-top: 7%;
  padding-bottom: 7%;
  border-radius: 15px;

  input {
    width: 100%;
    min-width: 360px;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #121214;
    color: #eee;
    font-size: 1.1em;
    margin-bottom: 10px;
    background: #121214;

    transition: all 340ms;
    &:focus {
      border: 2px solid ${colors.primaryColorLight};
    }
  }

  button {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    background: ${colors.primaryColorLight};

    &:hover {
      filter: brightness(75%);
    }
  }
`;

export const LoginTitle = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

  font-size: 3.5em;
  display: inline-flex;
  flex-direction: column;
  padding: 2%;
  margin-top: 200px;

  p {
    font-size: 0.5em;
    margin-top: 50px;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
  }
`;
