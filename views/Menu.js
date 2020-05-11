/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext, useEffect, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Separator,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';
import globalStyles from '../styles/global';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidosContext from '../context/pedidos/pedidosContext';

const Menu = () => {
  // Context de firebase
  const { menu, obtenerProductos } = useContext(FirebaseContext);

  // Context de pedido
  const { seleccionarPlato } = useContext(PedidosContext);

  // Hook para redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
    // console.log(menu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mostrarHeading = (categoria, i) => {
    if (i > 0) {
      const categoriaAnterior = menu[i - 1].categoria;
      if (categoriaAnterior !== categoria) {
        return (
          <Separator style={styles.separador}>
            <Text style={styles.separadorTexto}>{categoria}</Text>
          </Separator>
        );
      }
    } else {
      return (
        <Separator style={styles.separador}>
          <Text style={styles.separadorTexto}>{categoria}</Text>
        </Separator>
      );
    }
  };

  return (
    <Container style={globalStyles.contenedor}>
      <Content style={{ backgroundColor: '#fff' }}>
        <List>
          {menu.map((plato, i) => {
            const {
              imagen,
              nombre,
              descripcion,
              categoria,
              precio,
              id,
            } = plato;

            return (
              <Fragment key={id}>
                {mostrarHeading(categoria, i)}
                <ListItem
                  onPress={() => {
                    // Eliminar propiedades del plato
                    const { existencia, ...plato2 } = plato;
                    seleccionarPlato(plato2);
                    navigation.navigate('DetallePlato');
                  }}>
                  <Thumbnail large square source={{ url: imagen }} />
                  <Body>
                    <Text>{nombre}</Text>
                    <Text note numberOfLines={2}>
                      {descripcion}
                    </Text>
                    <Text>Precio: {precio} €</Text>
                  </Body>
                </ListItem>
              </Fragment>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: '#000',
  },
  separadorTexto: {
    color: '#ffda00',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Menu;
