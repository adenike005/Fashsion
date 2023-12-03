// TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screen/Home";
import Settings from "../Screen/Settings";
import Color from "./Color";
import Love from "../Screen/Love";
import Cart from "../Screen/Cart"

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const iconSize = 18;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Love") {
            iconName = focused ? "heart-outline" : "heart-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.White,
        inactiveTintColor: Color.Red,
        showLabel: false,
        tabStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        style: {
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, // Hide the header for the 'Cart' screen
        }}
      />

      <Tab.Screen
        name="Love"
        component={Love}
        options={{
          headerShown: false, // Hide the header for the 'Cart' screen
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false, // Hide the header for the 'Cart' screen
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false, // Hide the header for the 'Cart' screen
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
