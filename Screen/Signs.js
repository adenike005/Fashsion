import React, { useState } from "react";
import {
  View,
  Text,
  PixelRatio,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, Feather } from "react-native-vector-icons";
import Color from "../Navigation/Color";
import Images from "../Navigation/Images";
import Button from "../Navigation/Button";
import { ScrollView } from "react-native-gesture-handler";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Signs = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = () => {
    setUsernameError(
      username.trim() === "" ? "Please enter a username or email." : ""
    );
    setPasswordError(password.trim() === "" ? "Please enter a password." : "");

    if (username.trim() !== "" && password.trim() !== "") {
      // Simulate a successful login for demonstration purposes
      // Replace this with your actual login logic
      const isLoggedIn = true;

      if (isLoggedIn) {
        // Navigate to the home screen
        navigation.navigate("Home"); // Replace "Home" with the actual name of your home screen
      } else {
        // Handle unsuccessful login (show an error message, etc.)
        setError("Invalid username or password");
      }
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Color.White }}>
      <View style={{ paddingHorizontal: 25, marginTop: "15%" }}>
        <Text
          style={{
            fontSize: getFontSize(30),
            fontFamily: "Medium",
            marginBottom: 36,
          }}
        >
          Create an
          {"\n"}account
        </Text>
        {usernameError !== "" && (
          <Text style={{ color: "red", marginBottom: 10 }}>
            {usernameError}
          </Text>
        )}

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
            <Ionicons
              name="person"
              size={18}
              style={{ color: "#676767", marginRight: 5 }}
            />
            <TextInput
              placeholder="Username or Email"
              placeholderTextColor="#676767"
              value={username}
              onChangeText={(text) => setUsername(text)}
              onFocus={() => setUsernameError("")}
              onBlur={() =>
                setUsernameError(
                  username.trim() === ""
                    ? "Please enter a username or email."
                    : ""
                )
              }
            />
          </View>

          {passwordError !== "" && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {passwordError}
            </Text>
          )}
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
                style={{ color: "#676767", marginRight: 5 }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#676767"
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={(text) => setPassword(text)}
                onFocus={() => setPasswordError("")}
                onBlur={() =>
                  setPasswordError(
                    password.trim() === "" ? "Please enter a password." : ""
                  )
                }
              />
            </View>
            <TouchableOpacity onPress={toggleSecureTextEntry}>
              <Feather
                name={secureTextEntry ? "eye-off" : "eye"}
                size={18}
                style={{ color: "#676767" }}
              />
            </TouchableOpacity>
          </View>

          {passwordError !== "" && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {passwordError}
            </Text>
          )}

          <View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: Color.Grays,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: Color.Gray,
              marginBottom: "2%",
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
                style={{ color: "#676767", marginRight: 5 }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#676767"
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={(text) => setPassword(text)}
                onFocus={() => setPasswordError("")}
                onBlur={() =>
                  setPasswordError(
                    password.trim() === "" ? "Please enter a password." : ""
                  )
                }
              />
            </View>
            <TouchableOpacity onPress={toggleSecureTextEntry}>
              <Feather
                name={secureTextEntry ? "eye-off" : "eye"}
                size={18}
                style={{ color: "#676767" }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: "10%" }}>
            <Text style={{ fontFamily: "Light", fontSize: getFontSize(12) }}>
              By clicking the <Text style={{ color: "red" }}>Register</Text>{" "}
              button, you agree to the public offer
            </Text>
          </View>
        </View>

        <Button title="Create Account" onPress={handleLogin} />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30%",
          }}
        >
          <Text
            style={{
              fontFamily: "Light",
              fontSize: getFontSize(12),
              marginBottom: "5%",
            }}
          >
            - OR Continue with -
          </Text>
          <View style={{ flexDirection: "row", display: "flex" }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#fdd7dd",
                borderColor: Color.Red,
                borderWidth: 1,
                marginRight: "2%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={Images.Google}
                style={{ width: "60%", height: "60%" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#fdd7dd",
                borderColor: Color.Red,
                borderWidth: 1,
                marginRight: "2%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={Images.apple}
                style={{ width: "60%", height: "60%" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#fdd7dd",
                borderColor: Color.Red,
                borderWidth: 1,
                marginRight: "2%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={Images.facebook}
                style={{ width: "60%", height: "60%" }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            marginTop: "10%",
          }}
        >
          <Text
            style={{
              marginRight: "2%",
              fontFamily: "Light",
              fontSize: getFontSize(13),
            }}
          >
            Create An Account
          </Text>
          <Text
            style={{
              color: Color.Red,
              fontSize: getFontSize(13),
              textDecorationLine: "underline",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signs;
