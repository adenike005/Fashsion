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
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native';

const HorizontalTwoColumnFlatList = () => {
  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={true}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const { width } = Dimensions.get('window');
const itemWidth = width / 2 - 20;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#3498db',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 8,
    width: itemWidth,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  contentContainer: {
    flexDirection: 'row',
  },
});

export default HorizontalTwoColumnFlatList;




