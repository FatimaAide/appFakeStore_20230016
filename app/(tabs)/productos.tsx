import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Productos = () => {
  const router = useRouter();
  const { categoria } = useLocalSearchParams(); // Obtiene la categoría seleccionada
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const consultarProductos = async () => {
      setCargando(true);
      try {
        let url = 'https://fakestoreapi.com/products';
        
        // Si hay una categoría, filtrar productos
        if (categoria) {
          url = `https://fakestoreapi.com/products/category/${categoria}`;
        }

        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error(`Error al realizar la petición: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        setProductos(datos);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
      setCargando(false);
    };
    consultarProductos();
  }, [categoria]); // Se ejecuta cuando cambia la categoría

  // Componente de Producto (Tarjeta)
  const ProductoItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: `/productos/${item.id}`,
          params: { producto: JSON.stringify(item) },
        })
      }
    >
      <Image source={{ uri: item.image }} style={styles.imagen} />
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{item.title}</Text>
        <Text style={styles.precio}>💲{item.price?.toFixed(2)}</Text>
        <Text numberOfLines={2} style={styles.descripcion}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (cargando) {
    return (
      <View style={styles.cargando}>
        <Text style={styles.titulo}>Cargando Productos...</Text>
        <ActivityIndicator size="large" color="#6200ea" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {categoria ? `Productos de ${categoria}` : 'Todos los Productos'}
      </Text>
      <FlatList
        data={productos}
        renderItem={ProductoItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

export default Productos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fafafa',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  flatlistContainer: {
    paddingBottom: 20,
  },
  cargando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  imagen: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },
  precio: {
    fontSize: 16,
    color: '#6200ea',
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
  },
});
