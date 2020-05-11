import React, { useContext } from 'react';
import { Image } from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Body,
  H1,
  Card,
  CardItem,
} from 'native-base';
import globalStyles from '../styles/global';

const DetallePlato = () => {
  // Pedido context
  const plato = useContext(PedidosContext);
  const { nombre, imagen, precio, descripcion } = plato.plato;
  console.log(plato);
  return (
    <Container style={globalStyles.contenedor}>
      <Content style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>{nombre}</H1>
        <Card>
          <CardItem>
            <Body>
              <Image style={globalStyles.imagen} source={{ uri: imagen }} />
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default DetallePlato;
