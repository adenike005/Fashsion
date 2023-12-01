import {
  View,
  Text,
  PixelRatio,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Color from "../Navigation/Color";
import Images from "../Navigation/Images";
// import Icon from 'react-native-vector-icons/Feather';
import { Ionicons, Feather } from "react-native-vector-icons";
import Button from "../Navigation/Button";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Login = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <View style={{ flex: 1, backgroundColor: Color.White }}>
      <View style={{ paddingHorizontal: 30, marginTop: "15%" }}>
        <Text
          style={{
            fontSize: getFontSize(36),
            fontFamily: "Medium",

            marginBottom: 36,
          }}
        >
          Welcome {"\n"}Back!
          {/* <Camera color="red" size={48} /> */}
        </Text>

        <View>
          <View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: Color.Grays,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: Color.Gray,
              marginBottom: "10%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            {/* <Image
              source={Images.User}
              style={{ marginRight: 5, height: 20, width: 20 }}
            /> */}

            <Ionicons
              name="person"
              size={18}
              style={{ color: Color.Gray, marginRight: 5 }}
            />
            <TextInput
              placeholder="Username or Email"
              placeholderTextColor={Color.Gray}
            />
          </View>

          <View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: Color.Grays,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: Color.Gray,
              marginBottom: "10%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Feather
                name="lock"
                size={18}
                style={{ color: Color.Gray, marginRight: 5 }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={Color.Gray}
                secureTextEntry={secureTextEntry}
              />
            </View>
            <TouchableOpacity onPress={toggleSecureTextEntry}>
              <Feather
                name={secureTextEntry ? "eye-off" : "eye"}
                size={18}
                style={{ color: Color.Gray }}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{textAlign:"right"}}>Forgot Password?</Text>
          </View>

        </View>
          <Button title="Login" />
      </View>
    </View>
  );
};

export default Login;
