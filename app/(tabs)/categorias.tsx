import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const categorias = [
  { id: 'electronics', name: 'Electrónica' },
  { id: 'jewelery', name: 'Joyería' },
  { id: "men's clothing", name: 'Ropa Hombre' },
  { id: "women's clothing", name: 'Ropa Mujer' }
];

const Categorias = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorías</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/productos?categoria=${item.id}`)}
          >
            <Text style={styles.texto}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categorias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#6200ea',
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  texto: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
