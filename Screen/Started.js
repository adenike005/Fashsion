import React from 'react';
import { View, Text, ImageBackground, StyleSheet, PixelRatio } from 'react-native';
import Images from '../Navigation/Images';
import Color from '../Navigation/Color';
import Button from '../Navigation/Button';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Started = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={Images.Background}
        style={styles.backgroundImage}
        resizeMode='cover'>
      
        <View style={styles.overlay} />
        {/* Your content goes here */}
        {/* Text, buttons, or other components */}
       
        <Text style={{textAlign:"center", width:"80%", fontSize:getFontSize(30), color:Color.White, fontFamily:"Medium"}}>You want Authentic, here you go!</Text>
        <Text style={{marginTop:"5%", fontSize:getFontSize(13), color:Color.White, fontFamily:"Light", marginBottom:"10%"}}>Find it here, buy it now!</Text>
       <View style={{width:"70%"}}>
       <Button title="Get Started"/>
       </View>
       
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems:"center",
    padding:"5%"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,  
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  },
});

export default Started;
