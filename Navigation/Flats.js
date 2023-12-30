// import React, { useState } from 'react';
// import { View, FlatList, Image, StyleSheet, Dimensions, Text } from 'react-native';

// const data = [
//   {
//     id: '1',
//     title: 'Women Printed Kurta',
//     image: require("../assets/Images/beautiful.jpg"),
//     text: "",
//   },
//   {
//     id: '2',
//     title: 'HRX by Hrithik Roshan',
//     image: require("../assets/Images/beautiful.jpg"),
//   },
//   {
//     id: '3',
//     title: 'HRX by Hrithik Roshan',
//     image: require("../assets/Images/beautiful.jpg"),
//   },
// ];

// const windowWidth = Dimensions.get('window').width;
// const itemWidth = windowWidth / 2 - 20;
// const itemHeight = 200; // Increased height

// const TwoRowCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const renderItem = ({ item, index }) => {
//     const rowItems = data.slice(index * 3, (index + 1) * 3);
//     return (
//       <View style={styles.carouselItem}>
//         <FlatList
//           horizontal
//           data={rowItems}
//           renderItem={({ item: rowData }) => {
//             return (
//               <View style={styles.item}>
//                <View style={{width:"50%", height:"50%"}}>
//                <Image style={styles.image} source={rowData.image} />
//                 </View>
//                 <Text style={styles.title}>{rowData.title}</Text>
//               </View>
//             );
//           }}
//           keyExtractor={(item) => item.id}
//           showsHorizontalScrollIndicator={false}
//           snapToInterval={itemWidth}
//           snapToAlignment="start"
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[1, 2]}
//         renderItem={renderItem}
//         keyExtractor={(item) => `list-item-${item}`}
//         showsVerticalScrollIndicator={false}
//         scrollEnabled={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   carouselItem: {
//     marginVertical: 10,
//   },
//   item: {
//     width: itemWidth,
//     height: itemHeight,
//     margin: 10,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     // borderRadius: 10,
//   },
//   title: {
//     paddingTop: 10, // Add padding to separate image and text
//     textAlign: 'center',
//   },
// });

// export default TwoRowCarousel;


// import React, { useState } from 'react';
// import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

// const data = [
//   {
//     id: '1',
//     title: 'Item 1',
//     image: require("../assets/Images/beautiful.jpg"),
//   },
//   {
//     id: '2',
//     title: 'Item 2',
//     image: require("../assets/Images/beautiful.jpg"),
//   },
//   {
//     id: '3',
//     title: 'Item 3',
//     image: require("../assets/Images/beautiful.jpg"),
//   },
// ];

// const windowWidth = Dimensions.get('window').width;
// const itemWidth = windowWidth / 2 - 20;
// const itemHeight = 150;

// const TwoRowCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const renderItem = ({ item, index, rowIndex }) => {
//     const rowItems = data.slice(index * 2, (index + 1) * 2);

//     return (
//       <View style={styles.carouselItem}>
//         <View style={styles.arrowContainer}>
//           {index > 0 && (
//             <TouchableOpacity
//               style={styles.arrowButton}
//               onPress={() => setActiveIndex(activeIndex - 1)}
//             >
//               <Text style={styles.arrowText}>←</Text>
//             </TouchableOpacity>
//           )}
//           {index < Math.floor(data.length / 2) - 1 && (
//             <TouchableOpacity
//               style={styles.arrowButton}
//               onPress={() => setActiveIndex(activeIndex + 1)}
//             >
//               <Text style={styles.arrowText}>→</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//         <FlatList
//           horizontal
//           data={rowItems}
//           renderItem={({ item: rowData }) => {
//             return (
//               <View style={styles.item}>
//                 <Image style={styles.image} source={rowData.image} />
//               </View>
//             );
//           }}
//           keyExtractor={(item) => item.id}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[1, 2]}
//         renderItem={renderItem}
//         keyExtractor={(item) => `list-item-${item}`}
//         showsVerticalScrollIndicator={false}
//         scrollEnabled={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   carouselItem: {
//     marginVertical: 10,
//   },
//   item: {
//     width: itemWidth,
//     height: itemHeight,
//     margin: 10,
//     borderRadius: 10,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     borderRadius: 10,
//   },
//   arrowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   arrowButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   arrowText: {
//     fontSize: 24,
//   },
// });

// export default TwoRowCarousel;




import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import Images from './Images';

const HorizontalFlatList = () => {
  const data = [
    { id: '2', title: 'Kids', image : Images.girl , text:"HRX by Hrithik Roshan"},
    { id: '3', title: 'Fashion', image : Images.Woman , text:"HRX by Hrithik Roshan"},
    { id: '4', title: 'Mens', image : Images.male , text:"HRX by Hrithik Roshan"},
    { id: '5', title: 'Womens', image : Images.Beautiful, text:"HRX by Hrithik Roshan" },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
       <View style={{width:"100%", height:"80%"}}>
       <Image source={item.image} style={{width:"100%", height:"100%"}}/>
       <Text>{item.title}</Text>
       <Text>{item.text}</Text>
       </View>
      
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={true} // Set to true for horizontal FlatList
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: 130, // Adjust the width as needed
    height: 130, // Adjust the height as needed
    margin: 10,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HorizontalFlatList;

