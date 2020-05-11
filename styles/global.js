import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  contenido: {
    marginHorizontal: '2.5%',
    flex: 1,
  },
  boton: {
    backgroundColor: '#ffda00',
  },
  botonTexto: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#000',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
  },
  imagen: {
    height: 300,
    width: '100%',
  },
});

export default globalStyles;
