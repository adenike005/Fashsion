import {
  View,
  Text,
  PixelRatio,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Color from "../Navigation/Color";

import Images from "../Navigation/Images";
import { Ionicons, Feather, Entypo } from "react-native-vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import Button from "../Navigation/Button";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Settings = ({ navigation, route }) => {
  const [image, setImage] = useState(null);

  // Get the updateImage function from the route params
  // const { updateImage } = route.params;
  const { updateImage } = route.params || {};
  const [selectedAddress, setSelectedAddress] = useState("");

  const addressData = [
    "216 St Paul's Rd",
    "Another Address 1",
    "Another Address 2",
    // Add more addresses as needed
  ];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      // Call the updateImage function to update the image state in the Home component
      updateImage(result.uri);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 25, marginTop: "10%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} Color={Color.Black} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: getFontSize(16),
            fontFamily: "Medium",
          }}
        >
          Checkout
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <View style={{}}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderColor: Color.White,
                borderWidth: 4,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 60,
                }}
                source={image ? { uri: image } : Images.F1}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity
              style={{ alignItems: "flex-end", top: "-25%", zIndex: 99 }}
              onPress={pickImage}
            >
              <Entypo name="camera" size={30} color="#4392f9" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: getFontSize(16),
              fontFamily: "Medium",
              marginBottom: "5%",
            }}
          >
            Personal Details
          </Text>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            Email Address
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="aashifa@gmail.com" />
          </View>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            Password
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="***********" secureTextEntry={true} />
          </View>
          <TouchableOpacity style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                fontSize: getFontSize(10),
                color: Color.Red,
                textDecorationLine: "underline",
              }}
            >
              Change Password
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              height: 1,
              borderWidth: 0.6,
              marginTop: "10%",
              borderColor: Color.Gray,
              marginBottom: "10%",
            }}
          ></View>
          <Text
            style={{
              fontSize: getFontSize(15),
              fontFamily: "Medium",
              marginBottom: "5%",
            }}
          >
            Business Address Details
          </Text>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            Pincode
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="450116" />
          </View>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            Address
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="216 St Paul's Rd, " />
          </View>

          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            city
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="London" />
          </View>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            State
          </Text>
          {/*  */}

          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              // padding: "3%",
            }}
          >
            <Picker
              selectedValue={selectedAddress}
              onValueChange={(itemValue) => setSelectedAddress(itemValue)}
              style={{
                height: 40,
                width: "100%",
                borderWidth: 1,
                borderColor: Color.Gray,
                borderBottomWidth: 1,
                justifyContent: "center",
                // padding: "3%",
              }}
            >
              <Picker.Item
                label="Select an address"
                value=""
                color={Color.Gray}
              />
              {addressData.map((address, index) => (
                <Picker.Item key={index} label={address} value={address} />
              ))}
            </Picker>
          </View>

          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            Country
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="United Kingdom" />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            borderWidth: 0.6,
            marginTop: "10%",
            borderColor: Color.Gray,
            marginBottom: "10%",
          }}
        ></View>

        <Text
          style={{
            fontSize: getFontSize(15),
            fontFamily: "Medium",
            marginBottom: "5%",
          }}
        >
          Bank Account Details
        </Text>
        <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            Bank Account Number
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="204356XXXXXXX" />
          </View>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            Account Holder’s Name
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "5%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="Abhiraj Sisodiya" />
          </View>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: "Medium",
              marginBottom: "2%",
              fontFamily: "Light",
            }}
          >
            IFSC Code
          </Text>
          <View
            style={{
              width: "100%",
              height: 40,
              borderWidth: 1,
              borderColor: Color.Gray,
              borderBottomWidth: 1,
              marginBottom: "10%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <TextInput placeholder="SBIN00428" />
          </View>
          <Button title='Save'/>
      </View>
    </ScrollView>
  );
};

export default Settings;
