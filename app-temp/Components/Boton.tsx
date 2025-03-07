import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  titulo: string;
  onPress: () => void;
  variante?: 'primario' | 'secundario' | 'peligro';
  estilo?: StyleProp<ViewStyle>;
  disable?: boolean;
  icono?: React.ReactNode;
  posicionIcono?: 'izquierda' | 'derecha';
};

const Boton = ({ titulo, onPress, variante = 'primario', estilo, disable, icono, posicionIcono }: Props) => {
  const getVariante = () => {
    switch (variante) {
      case 'secundario':
        return styles.secundario;
      case 'peligro':
        return styles.peligro;
      default:
        return styles.primario;
    }
  };

  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.boton, getVariante(), estilo, disable && styles.disable]} 
      disabled={disable}
    >
      {icono && posicionIcono !== 'derecha' && icono}
      <Text style={styles.titulo}>{titulo}</Text>
      {icono && posicionIcono === 'derecha' && icono}
    </Pressable>
  );
};

export default Boton;

const styles = StyleSheet.create({
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  titulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  primario: {
    backgroundColor: '#1E3A8A',
    borderColor: '#1E40AF',
  },
  secundario: {
    backgroundColor: '#64748B',
    borderColor: '#475569',
  },
  peligro: {
    backgroundColor: '#DC2626',
    borderColor: '#B91C1C',
  },
  disable: {
    opacity: 0.5,
  },
});
