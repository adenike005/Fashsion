import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Screen/Splash';
import Onboarding from '../Screen/Onboarding';
import Login from '../Screen/Login'


const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='Onboarding' component={Onboarding}/>
            <Stack.Screen name ="Login" component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index

