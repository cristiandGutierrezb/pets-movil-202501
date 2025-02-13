import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function MarketplaceLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="food"
          options={{
            drawerLabel: 'Comida',
            title: 'Comida',
          }}
        />
        <Drawer.Screen
          name="games"
          options={{
            drawerLabel: 'Juguetes',
            title: 'Juguetes',
          }}
        />
        <Drawer.Screen
          name="pharmacy"
          options={{
            drawerLabel: 'Farmacia',
            title: 'Farmacia',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
