


import React from 'react';
import { View, Image, StyleSheet, PixelRatio, ImageBackground, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Images from "./Images";
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const MyCarousel = () => {
  const data = [
    { id: '1',  image: Images.Group },
    { id: '1', text: '50% - 40% OFF', image: Images.girl },
    { id: '1', text: 'Item 1', image: Images.Woman },
    { id: '1', text: 'Item 1', image: Images.Beautiful },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
  <>
   <View style={{  width: '100%', height: getFontSize(150) }}>
        <Image
          source={item.image}
          style={{ width: '100%', height: '100%', resizeMode: 'cover',  borderRadius: 20, }}
        />
      </View>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <View style={{paddingVertical:"10%", paddingHorizontal:"5%"}}><Text style={{ color: 'white', fontSize: getFontSize(16), fontWeight: 'bold' }}>{item.text}</Text></View>
    </View>
  </>
     
  
    
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
      layout="default"
      loop
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    // borderRadius: 10,
    // overflow: "hidden",
    // width:"100%",
    // height:"30%"
    flex:1,
  },
  // image: {
  //   width: "100%",
  //   height: "100%",
  //   resizeMode:"contain",
  // },
});

export default MyCarousel;





