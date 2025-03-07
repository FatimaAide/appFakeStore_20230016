import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
    return (
        <View style={estilo.contenedor}>
            <Text style={estilo.titulo}>PODAI</Text>
            <Text style={estilo.labels}>Usuario</Text>
            <TextInput
                style={estilo.cajas}
                placeholder="Usuario..."
                placeholderTextColor="#B1B1B1"
            />
            <Text style={estilo.labels}>Password</Text>
            <TextInput
                style={estilo.cajas}
                placeholder="Password..."
                placeholderTextColor="#B1B1B1"
                secureTextEntry
            />
            <Button
                title="Login"
                color={'#F58D42'}
                onPress={() => { Alert.alert('Logeando...') }}
            />
        </View>
    );
}

const estilo = StyleSheet.create({
    contenedor: {
        backgroundColor: '#f8f8f8', // Color de fondo más suave
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 30, // Tamaño de fuente más grande
        color: '#3E2723', // Color de texto más oscuro para el título
        fontWeight: 'bold',
        marginBottom: 20,
    },
    labels: {
        fontSize: 16, // Un tamaño más pequeño para las etiquetas
        color: '#3E2723',
        fontWeight: '600',
        alignSelf: 'flex-start', // Alinear a la izquierda
        marginLeft: 20,
        marginBottom: 5,
    },
    cajas: {
        width: '80%', // Ancho más grande para los campos de texto
        borderColor: '#F58D42', // Color más vibrante para los bordes
        borderWidth: 2,
        borderRadius: 8,
        marginVertical: 10,
        padding: 12,
        backgroundColor: '#ffffff', // Fondo blanco para los inputs
    },
});
