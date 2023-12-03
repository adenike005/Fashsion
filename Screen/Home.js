// import { View, Text, PixelRatio, Image, TouchableOpacity } from "react-native";
// import React, {useState, useEffect} from "react";
// import Color from "../Navigation/Color";
// import Images from "../Navigation/Images";
// import { Ionicons, Feather } from "react-native-vector-icons";

// const fontScale = PixelRatio.getFontScale();
// const getFontSize = (size) => size / fontScale;

// const Home = ({ navigation, route }) => {
//   // const image = route.params?.image;
//   const [image, setImage] = useState(null);
//   useEffect(() => {
//     if (route.params?.image) {
//       setImage(route.params.image);
//     }
//   }, [route.params?.image]);
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ paddingHorizontal: 25, marginTop: "10%" }}>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Feather size={22} name="menu" Color={Color.Black} />
//           <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               source={Images.Logo}
//               style={{ width: 30, height: 30 }}
//               resizeMode="contain"
//             />
//             <Text
//               style={{
//                 color: "#4392F9",
//                 fontSize: getFontSize(17),
//                 marginLeft: "5%",
//               }}
//             >
//               Stylish
//             </Text>
//           </View>
//           <TouchableOpacity
//         onPress={() => navigation.navigate('Settings', { image })}>
//        <Image source={image ? { uri: image } : Images.F1} style={{width:30, height:30, borderRadius:15}} resizeMode='contain'/>
//        </TouchableOpacity>

//           {/* <Image
//             style={{
//               width: "100%",
//               height: "100%",
//               // borderRadius: 60,
//             }}
//             source={image ? { uri: image } : Images.F1}
//             resizeMode="contain"
//             onPress={() => navigation.navigate('Settings')}
//           /> */}
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Home;


import { View, Text, PixelRatio, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Color from "../Navigation/Color";
import Images from "../Navigation/Images";
import { Ionicons, Feather } from "react-native-vector-icons";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Root = ({ navigation, route }) => {
  const [image, setImage] = useState(null);

  // Function to update the image state
  const updateImage = (newImage) => {
    setImage(newImage);
  };

  return (
    <View style={{ flex: 1 }}>
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
      </View>
    </View>
  );
};

export default Root;
