import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Relatorios from 'pages/Relatorios';
import Perfil from 'pages/Perfil';
import EntregasStack from 'routes/Entregas/stackTabs';

const Tab = createBottomTabNavigator();

export default function HomeBottomTabs() {
  return (
    <>
        <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}>
            <Tab.Screen name="Entregas" component={EntregasStack} />
            <Tab.Screen name="Relatorios" component={Relatorios} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    </>
  )
}