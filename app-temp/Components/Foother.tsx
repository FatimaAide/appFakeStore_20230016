import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type propiedades={
    fecha:string,
    grupo:string
}

const Foother = (props:propiedades) => {
  return (
    <View style={styles.container}>
      <Text>{props.fecha}   </Text>
      <Text>   {props.grupo}</Text>
    </View>
  )
}

export default Foother

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E293B', // Azul grisáceo oscuro
    borderWidth: 2,
    borderColor: '#334155', // Azul oscuro con tono gris
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FACC15', // Amarillo vibrante
  },
});


