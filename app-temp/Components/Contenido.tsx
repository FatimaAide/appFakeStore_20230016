import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../screens/login'

const Contenido = () => {
  return (
    <View style={styles.container}>
      <Text>Contenido</Text>
      <Login/>
    </View>
  )
}

export default Contenido

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B', // Azul grisáceo oscuro
    borderWidth: 2,
    borderColor: '#334155', // Azul oscuro con tono gris
    borderRadius: 12,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FACC15', // Amarillo vibrante
    marginBottom: 10,
  },
});

