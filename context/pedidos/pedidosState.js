import React, { useReducer } from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

const PedidosState = props => {
  // crear state inicial
  const initialState = {
    pedido: [],
  };

  // usereducer con dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  return (
    <PedidosContext.Provider value={{ pedido: state.pedido }}>
      {props.children}
    </PedidosContext.Provider>
  );
};

export default PedidosState;
