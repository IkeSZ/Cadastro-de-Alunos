import * as types from '../types';

const initAllState = {
  botaoClicado: false,
};

export default function (state = initAllState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCESS: {
      console.log('Sucesso');

      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;

      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =(');

      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição.');

      return state;
    }

    default: {
      return state;
    }
  }
}
