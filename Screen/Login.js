import { View, Text, PixelRatio, Image, TextInput } from "react-native";
import React from "react";
import Color from "../Navigation/Color,";
import Images from "../Navigation/Images";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Login = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Color.White }}>
      <View style={{ paddingHorizontal: 30, marginTop: "15%" }}>
        <Text
          style={{
            fontSize: getFontSize(36),
            fontFamily: "Medium",
            fontWeight: "bold",
            letterSpacing:4,
            marginBottom:36
          }}
        >
          Welcome {"\n"}Back!
        </Text>

        <View> 
        <View style={{width:"100%", height:50, backgroundColor:Color.Grays, borderRadius:5, borderWidth:1, borderColor:Color.Gray, marginBottom:"10%", display:"flex", flexDirection:"row", alignItems:"center", paddingHorizontal: 10}}>
          <Image source={Images.User}  style={{marginRight: 5}} />
          <TextInput
          placeholder="Username or Email"
          placeholderTextColor={Color.Gray}
         />

        </View>

        <View style={{width:"100%", height:50, backgroundColor:Color.Grays, borderRadius:5, borderWidth:1, borderColor:Color.Gray, marginBottom:"10%", display:"flex", flexDirection:"row", alignItems:"center", paddingHorizontal: 10, justifyContent:"space-between"}}>
          <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <Image source={Images.pass} style={{marginRight: 10}}/>
          <TextInput
          placeholder="Password"
          placeholderTextColor={Color.Gray}
         />
          </View>
         <Image source={Images.eye}/>
        </View>
        
        </View>
      </View>
    </View>
  );
};

export default Login;
