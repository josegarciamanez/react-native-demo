import React, { useReducer } from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import { OBTENER_PRODUCTOS_EXITO } from '../../types';
import _ from 'lodash';

const FirebaseState = props => {
  // console.log(firebase);

  // crear state inicial
  const initialState = {
    menu: [],
  };

  // usereducer con dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  // funcion para obtener productos
  const obtenerProductos = () => {
    // consultar firebase
    firebase.db
      .collection('productos')
      .where('existencia', '==', true)
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let platos = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // ordenar por categoria con lodash
      platos = _.sortBy(platos, 'categoria');

      // console.log(platos);

      dispatch({
        type: OBTENER_PRODUCTOS_EXITO,
        payload: platos,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
