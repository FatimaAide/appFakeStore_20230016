import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type propiedades={
    titulo:string,
    nombre:string,
    imagen:string
}

const Header = (props:propiedades) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={ require('../../assets/avatar.png')}  style={styles.imagen}/>
      </View>   
      <View style={styles.container2}>
        <Text style={styles.titulo} >{props.titulo}</Text>
        <Text>{props.nombre}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B', // Azul grisáceo oscuro
    borderRadius: 12,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  container2: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FACC15', // Amarillo vibrante
  },
  imagen: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FACC15', // Amarillo vibrante
  },
  nombre: {
    fontSize: 16,
    color: '#E5E7EB', // Gris claro
  },
});


