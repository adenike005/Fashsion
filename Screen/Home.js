import { View, Text, PixelRatio, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Color from "../Navigation/Color";
import Images from "../Navigation/Images";
import { Ionicons, Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Flat from "../Screen/Flat"
import Category from "../Navigation/Category";

//
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Root = ({ navigation, route }) => {
  const [image, setImage] = useState(null);

  // Function to update the image state
  const updateImage = (newImage) => {
    setImage(newImage);
  };



  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 25, marginTop: "10%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Feather size={22} name="menu" Color={Color.Black} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={Images.Logo}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: "#4392F9",
                fontSize: getFontSize(17),
                marginLeft: "5%",
              }}
            >
              Stylish
            </Text>
          </View>
          <TouchableOpacity
          style={{ width: 40, height: 40, borderRadius: 20 , borderWidth:2, borderColor:Color.White}}
          onPress={() => navigation.navigate('Settings', { updateImage })}>
            <Image
              source={image ? { uri: image } : Images.F1}
              style={{ width: "100%", height: "100%", borderRadius: 25 }}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        <View 
        style={{width:"100%", height:40,  
        backgroundColor:Color.White, elevation: 5, 
        marginTop:"5%",
        display:"flex", flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center", paddingHorizontal:"5%" }}>
         <View style={{ display:"flex", flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center", }}>
        <TouchableOpacity> 
          <Ionicons
         name='search'
         size={18}
         color={Color.Gray}
         style={{marginRight:"2%"}}/></TouchableOpacity>
         <TextInput
         placeholder="Search any Product.."
         placeholderTextColor={Color.Gray}/>
         </View>
         <View>
         <TouchableOpacity>
         <Ionicons
          name='mic'
          size={20}
          color={Color.Gray}/>
         </TouchableOpacity>
         </View>
        </View>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%", marginBottom:"5%"}}>
       <View>
        <Text>All Featured</Text>
       </View>
       <View style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
        <TouchableOpacity style={{width: 70, height:25, display:"flex", flexDirection:"row", elevation:5, backgroundColor:Color.White,alignItems:"center", paddingHorizontal:"5%",borderRadius:5 }}>
          <Text style={{marginRight:"10%"}}>Sort</Text>
          <MaterialCommunityIcons
          name='sort-ascending'/>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 70, height:25, display:"flex", flexDirection:"row", elevation:5, backgroundColor:Color.White,alignItems:"center", paddingHorizontal:"5%", borderRadius:5, marginRight:"5%" }}>
          <Text style={{marginRight:"10%"}}>Filter</Text>
          <MaterialCommunityIcons
          name='filter-outline'/>
        </TouchableOpacity>
       </View>
        </View>
        

       <View>
        <Flat/>
       </View>

       <View>
       <View>
        <Category/>
       </View>
      
    </View>
        
      </View>
    </ScrollView>
  );
};

export default Root;
