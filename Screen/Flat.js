import React from 'react';
import { View, Text, FlatList, Image, PixelRatio } from 'react-native';
import Images from '../Navigation/Images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../Navigation/Color';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const MyFlatList = () => {
  // Sample data for the FlatList
  const data = [
    { id: '1', title: 'Beauty', image : Images.close },
    { id: '1', title: 'Kids', image : Images.girl },
    { id: '1', title: 'Fashion', image : Images.Woman },
    { id: '1', title: 'Mens', image : Images.male },
    { id: '1', title: 'Womens', image : Images.Beautiful },
  
    // Add more items as needed
  ];

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={{marginHorizontal:10 }}>
      <TouchableOpacity style={{width:40, height:40, borderRadius:20,overflow: 'hidden'}}>
      <Image source={item.image} style={{width:"100%", height:"100%", borderRadius:50}} resizeMode='contain'/>
      </TouchableOpacity>
      <Text style={{textAlign:"center", color:Color.Darkgray, fontSize:getFontSize(10), fontFamily:"Light"}}>{item.title}</Text>
      
      {/* <Text>{item.title}</Text> */}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={5}
      
    />
  );
};

export default MyFlatList;


// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     SafeAreaView,
//     TextInput,
//     Platform,
//     StatusBar,
//     ScrollView,
//     Image,
//     Dimensions
// } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons'
// import Category from "../Navigation/Category";
// import Images from "../Navigation/Images";

// const { height, width } = Dimensions.get('window')

// class Explore extends Component {

//     componentWillMount() {
//         this.startHeaderHeight = 80
//         if (Platform.OS == 'android') {
//             this.startHeaderHeight = 100 + StatusBar.currentHeight
//         }
//     }

//     render() {
//         return (
//             <SafeAreaView style={{ flex: 1 }}>
//                 <View style={{ flex: 1 }}>
                   
//                     <ScrollView
//                         scrollEventThrottle={16}
//                     >
//                         <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                           

//                             <View style={{ height: 130, marginTop: 20 }}>
//                                 <ScrollView
//                                     horizontal={true}
//                                     showsHorizontalScrollIndicator={false}
//                                 >
//                                     <Category imageUri={require('../assets/Images/Onboarding1.png')}
//                                         name="Home"
//                                     />
//                                     <Category imageUri={require('../assets/Images/Onboarding1.png')}
//                                         name="Experiences"
//                                     />
//                                     <Category imageUri={require('../assets/Images/Onboarding1.png')}
//                                         name="Resturant"
//                                     />
//                                 </ScrollView>
//                             </View>
                            
//                         </View>
//                     </ScrollView>

//                 </View>
//             </SafeAreaView>
//         );
//     }
// }
// export default Explore;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
