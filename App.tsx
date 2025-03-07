import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native';
import Boton from './app-temp/Components/Boton';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Aplicacion de 5A</Text>
      
      <ActivityIndicator size={'large'} color={'pink'} />
      
      <Text>Navegacion</Text>
      
      <Boton titulo='Press me...' 
      onPress={()=>{Alert.alert('Saludos a Aide...')}}
      icono ={<AntDesign name="play" size={24} color="white"/>}
      posicionIcono='izquierda'
      variante='peligro'
      disable={true}/>

      <Boton titulo='Google' onPress={()=>{Alert.alert('Se logueo con google')}}
        icono={<AntDesign name="googleplus" size={24} color="black"/>}
        estilo={styles.botong}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E', // Azul oscuro elegante
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FACC15', // Amarillo vibrante
    marginBottom: 10,
  },
  botong: {
    backgroundColor: '#4285F4', // Azul de Google
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  activityIndicator: {
    marginVertical: 20,
  },
});
