import { View, Text , Image} from 'react-native'
import React, {useEffect} from 'react'
import Color from '../Navigation/Color';
import Images from '../Navigation/Images';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // Alert.alert('I am appearing...', 'After 5 seconds!');
      navigation.navigate("Onboarding")
    }, 5000);
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex:1, flexDirection:"row",}}>
    <Image source={Images.Logo} />
    <Text style={{color:Color.Red, fontSize: 40, marginLeft:10, fontFamily:"LibreBold"}}>Stylish</Text>
  </View>
  )
}

export default Splash