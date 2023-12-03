import { StyleSheet, Text, View, useColorScheme, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Splash from '../Screen/Splash';
import Onboarding from '../Screen/Onboarding';
import Login from '../Screen/Login';
import Home from '../Screen/Home';
import Forget from '../Screen/Forget';
import Signs from '../Screen/Signs';
import Settings from '../Screen/Settings';
import Icon from 'react-native-vector-icons/Entypo';
import Images from './Images';
import Started from '../Screen/Started';
import Tabs from './Tabs';
// Define Drawer Navigator separately
const StacNav = () => {
  
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name='Started' component={Started}/> */}
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      {/* <Stack.Screen name="Login" component={Login} /> */}
      
      <Stack.Screen
        name="Root"
        component={Tabs}
        options={{
          headerShown: false,
          headerTitle: "",
                   
          headerLeft: () => (
            <TouchableOpacity>
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={20}
                color="#000"
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  // Handle left button press
                }}
              >
                <View
                  style={{
                    marginRight: 10,
                    backgroundColor: "#f83758",
                    borderRadius: 8,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>Button 1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  // Handle middle button press
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f83758",
                    borderRadius: 8,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>Button 2</Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      {/* <Stack.Screen name="Forget" component={Forget} />
      <Stack.Screen name="Signs" component={Signs} />
      <Stack.Screen name='Settings' component={Settings}/> */}
    </Stack.Navigator>
  );
};

function Index() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0)', // Set the background color to transparent
          },
        }}
      >
        <Drawer.Screen
          name='Home'
          component={StacNav}
        />
        <Drawer.Screen
          name='Settings'
          component={Settings}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Index;





