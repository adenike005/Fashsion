


// import React from 'react';
// import { View, Image, StyleSheet, PixelRatio, ImageBackground, Text } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import Images from "./Images";
// const fontScale = PixelRatio.getFontScale();
// const getFontSize = (size) => size / fontScale;

// const MyCarousel = () => {
//   const data = [
//     { id: '1',  image: Images.Group },
//     { id: '1', text: '50% - 40% OFF', image: Images.girl, subtext:"Now in (product)", sub:"All colours",  },
//     { id: '1', text: '50% - 40% OFF', image: Images.Woman, subtext:"Now in (product)", sub:"All colours"},
//     { id: '1', text: '50% - 40% OFF', image: Images.Beautiful, subtext:"Now in (product)", sub:"All colours"},
//     // Add more items as needed
//   ];

//   const renderItem = ({ item }) => (
//   <>
//    <View style={{  width: '100%', height: getFontSize(150) }}>
//         <Image
//           source={item.image}
//           style={{ width: '100%', height: '100%', resizeMode: 'cover',  borderRadius: 20, }}
//         />
//       </View>
//       <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
//       <View style={{paddingVertical:"10%", paddingHorizontal:"5%"}}>
//         <Text style={{ color: 'white', fontSize: getFontSize(16), fontWeight: 'bold' }}>{item.text}</Text>
//         <Text style={{ color: 'white', fontSize: getFontSize(13), fontWeight: '300', marginTop:"3%" }}>{item.subtext}</Text>
//         <Text style={{ color: 'white', fontSize: getFontSize(13), fontWeight: '300', }}>{item.sub}</Text>
//         </View>
//     </View>
//   </>
     
  
    
//   );

//   return (
//     <Carousel
//       data={data}
//       renderItem={renderItem}
//       sliderWidth={300}
//       itemWidth={300}
//       layout="default"
//       loop
//     />
//   );
// };

// const styles = StyleSheet.create({
//   carouselItem: {
//     // borderRadius: 10,
//     // overflow: "hidden",
//     // width:"100%",
//     // height:"30%"
//     flex:1,
//   },
//   // image: {
//   //   width: "100%",
//   //   height: "100%",
//   //   resizeMode:"contain",
//   // },
// });

// export default MyCarousel;


// import React, { useState } from 'react';
// import { View, Image, StyleSheet, PixelRatio, Text } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import Images from './Images';

// const fontScale = PixelRatio.getFontScale();
// const getFontSize = (size) => size / fontScale;

// const MyCarousel = () => {
//   const data = [
//     { id: '1', image: Images.Group },
//     { id: '2', text: '50% - 40% OFF', image: Images.girl, subtext: 'Now in (product)', sub: 'All colours' },
//     { id: '3', text: '50% - 40% OFF', image: Images.Woman, subtext: 'Now in (product)', sub: 'All colours' },
//     { id: '4', text: '50% - 40% OFF', image: Images.Beautiful, subtext: 'Now in (product)', sub: 'All colours' },
//     // Add more items as needed
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const renderItem = ({ item, index }) => (
//     <View style={{ width: '100%', height: getFontSize(150), position: 'relative' }}>
//       <Image source={item.image} style={styles.image} />
//       {index === activeIndex && (
//         <View style={styles.activeDotContainer}>
//           <View style={styles.activeDot} />
//         </View>
//       )}
//       <View style={styles.overlay}>
//         <Text style={styles.text}>{item.text}</Text>
//         <Text style={styles.subtext}>{item.subtext}</Text>
//         <Text style={styles.sub}>{item.sub}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={300}
//         itemWidth={300}
//         layout="default"
//         loop
//         onSnapToItem={(index) => setActiveIndex(index)}
//       />
//       <View style={styles.paginationContainer}>
//         <Pagination
//            dotsLength={data.length}
//            activeDotIndex={activeIndex}
//            dotStyle={styles.dot}
//            inactiveDotOpacity={0.4}
//            inactiveDotScale={0.6}
//           //  activeDotColor="blue" // Set your desired color
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     borderRadius: 20,
//   },
//   activeDotContainer: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 1,
//   },
//   activeDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'blue', // Set your desired color
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     paddingVertical: '10%',
//     paddingHorizontal: '5%',
//   },
//   text: {
//     color: 'white',
//     fontSize: getFontSize(16),
//     fontWeight: 'bold',
//   },
//   subtext: {
//     color: 'white',
//     fontSize: getFontSize(13),
//     fontWeight: '300',
//     marginTop: '3%',
//   },
//   sub: {
//     color: 'white',
//     fontSize: getFontSize(13),
//     fontWeight: '300',
//   },
//   paginationContainer: {
//     marginTop: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 8,
//     backgroundColor: 'rgba(0, 0, 0, 0.92)',
//   },
// });

// export default MyCarousel;


import React, { useState } from 'react';
import { View, Image, StyleSheet, PixelRatio, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Images from './Images';
import Color from './Color';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const MyCarousel = () => {
  const data = [
    { id: '1', image: Images.Group },
    { id: '2', text: '50% - 40% OFF', image: Images.girl, subtext: 'Now in (product)', sub: 'All colours' },
    { id: '3', text: '50% - 40% OFF', image: Images.Woman, subtext: 'Now in (product)', sub: 'All colours' },
    { id: '4', text: '50% - 40% OFF', image: Images.Beautiful, subtext: 'Now in (product)', sub: 'All colours' },
    // Add more items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => (
    <View style={{ width: '100%', height: getFontSize(150), position: 'relative' }}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.subtext}>{item.subtext}</Text>
        <Text style={styles.sub}>{item.sub}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout="default"
        loop
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <View style={styles.dotContainer}>
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
              backgroundColor: activeIndex === i ? Color.Red : Color.Gray,
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: '10%',
    paddingHorizontal: '5%',
  },
  text: {
    color: 'white',
    fontSize: getFontSize(16),
    fontWeight: 'bold',
  },
  subtext: {
    color: 'white',
    fontSize: getFontSize(13),
    fontWeight: '300',
    marginTop: '3%',
  },
  sub: {
    color: 'white',
    fontSize: getFontSize(13),
    fontWeight: '300',
  },
});

export default MyCarousel;











