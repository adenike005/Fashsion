import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './Navigation/Index';
import { useFonts } from 'expo-font';
import Color from './Navigation/Color';


export default function App() {
  
  const [loaded] = useFonts({
    // Montserrat: require('./assets/fonts/Yatra-One.ttf'),
      LibreBold : require("./assets/Fonts/Libre-Bold.ttf"),
      Bold : require("./assets/Fonts/Montserrat-Bold.ttf"),
      Light : require("./assets/Fonts/Montserrat-Light.ttf"),
      Medium : require("./assets/Fonts/Montserrat-Medium.ttf"),
      Black : require("./assets/Fonts/Montserrat-Black.ttf")

  });
  if (!loaded) {
    return null;
  }
  return (
   <>
   <StatusBar backgroundColor={Color.White} />
   <Index/>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// App.js

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import CustomDrawerContent from './Screen/CustomDrawerContent'; // Adjust the path accordingly
// import Home from './Screen/Home';
// import Settings from './Screen/Settings';
// import {Text} from "react-native"

// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//  <NavigationContainer>
//   <Drawer.Navigator>
//   <Drawer.Screen name="Settings" component={Settings} />

//   </Drawer.Navigator>
//  </NavigationContainer>
//   );
// };

// export default App;


// import 'react-native-gesture-handler';

// import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';

// import FirstPage from './Pages/Firstpage';
// import SecondPage from './Pages/SecondPages';
// import ThirdPage from './Pages/ThirdPages';


// import Login from './Screen/Login'
// import Home from './Screen/Home'
// import Forget from './Screen/Forget';
// import Signs from './Screen/Signs';

// import Settings from './Screen/Settings';
// import Splash from './Screen/Splash';
// import Onboarding from './Screen/Onboarding';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const FirstScreenStack = () => {
//   return (
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{headerShown: false}}
//       >
//         <Stack.Screen
//           name="Home"
//           component={Home}
//         />
//       </Stack.Navigator>
//   );
// }

// const SecondScreenStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{headerShown: false}}
//     >
//       <Stack.Screen
//         name="SecondPage"
//         component={SecondPage}/>
//       <Stack.Screen
//         name="ThirdPage"
//         component={ThirdPage}/>
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: '#c6cbef', //Set Drawer background
//             width: 250, //Set Drawer width
//           },
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           }
//         }}>
//         <Drawer.Screen
//           name="Home"
//           options={{
//             drawerLabel: 'First page Option',
//             title: 'First Stack'
//           }}
//           component={FirstScreenStack} />
//         <Drawer.Screen
//           name="SecondPage"
//           options={{
//             drawerLabel: 'Second page Option',
//             title: 'Second Stack'
//           }}
//           component={SecondScreenStack} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

