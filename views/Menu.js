/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext, useEffect, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
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

const Menu = () => {
  const { menu, obtenerProductos } = useContext(FirebaseContext);

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
                <ListItem>
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
