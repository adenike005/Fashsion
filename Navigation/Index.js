import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Screen/Splash';
import Onboarding from '../Screen/Onboarding';

import Login from '../Screen/Login'

const Stack = createStackNavigator();



const Index = () => {
  const scheme = useColorScheme();
  console.log(scheme)

  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Onboarding' component={Onboarding}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index;


