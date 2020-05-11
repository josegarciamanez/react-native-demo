import React, { useReducer } from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';
import { SELECCIONAR_PRODUCTO } from '../../types';

const PedidosState = props => {
  // crear state inicial
  const initialState = {
    pedido: [],
    plato: null,
  };

  // usereducer con dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  // Selecciona el producto que el cliente quiere ordenar
  const seleccionarPlato = plato => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: plato,
    });
  };

  return (
    <PedidosContext.Provider
      value={{
        pedido: state.pedido,
        plato: state.plato,
        seleccionarPlato,
      }}>
      {props.children}
    </PedidosContext.Provider>
  );
};

export default PedidosState;
