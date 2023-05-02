import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from 'pages/Login';
import React from 'react'
import Home from 'pages/Home';
import { UserProvider } from 'common/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}
