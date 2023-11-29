import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './Navigation/Index';
import { useFonts } from 'expo-font';


export default function App() {
  
  const [loaded] = useFonts({
    // Montserrat: require('./assets/fonts/Yatra-One.ttf'),
      LibreBold : require("./assets/Fonts/Libre-Bold.ttf")

  });
  if (!loaded) {
    return null;
  }
  return (
   <>
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
