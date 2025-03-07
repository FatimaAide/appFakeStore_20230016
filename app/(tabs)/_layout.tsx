import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="categorias"  
        options={{
          title: 'Categorías',
          tabBarIcon: ({ color }) => <FontAwesome5 name="list" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="productos"  
        options={{
          title: 'Productos',
          tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-cart" size={24} color={color} />,
        }} 
      />
    </Tabs>
  );
}
