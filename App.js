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
