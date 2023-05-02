import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Entregas from 'pages/Entregas';
import Geral from 'pages/Geral';
import { DeliveryProvider } from 'common/Delivery';

const Stack = createStackNavigator();

export default function EntregasStack() {
  return (
    <DeliveryProvider>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="Visão geral" component={Geral}/>
            <Stack.Screen name="EntregasStack" component={Entregas}/>
        </Stack.Navigator>
    </DeliveryProvider>
  )
}
