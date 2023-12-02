import { View, Text, PixelRatio, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Color from "../Navigation/Color";
import Button from "../Navigation/Button";
import { Feather } from "react-native-vector-icons";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Forget = () => {
  const [userEmail, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleValidation = () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userEmail.trim()) {
      setEmailError("Please enter your email address.");
    } else if (!emailRegex.test(userEmail.trim())) {
      setEmailError("Please enter a valid email address.");
    } else {
      // Validation passed, proceed with your logic (e.g., submit the form)
      setEmailError(""); // Clear any previous errors
      Alert.alert("Success", "Validation passed! Proceed with your logic.");
    }
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 25, marginTop: "10%" }}>
      <Text
        style={{
          fontSize: getFontSize(36),
          fontFamily: "Medium",
          marginBottom: 36,
        }}
      >
        Forgot{"\n"}password?
      </Text>

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
        <Feather
          name="mail"
          size={20}
          style={{ color: "#676767", marginRight: 5 }}
        />
        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor="#676767"
          value={userEmail}
          onChangeText={(text) => setEmail(text)}
          onFocus={() => setEmail("")}
          onBlur={() => setEmail(password.trim() === "" ? "Please enter your email address ." : "")} 
        />
      </View>

      {emailError !== "" && (
        <Text style={{ color: "red", marginBottom: 10 }}>{emailError}</Text>
      )}

      <View style={{ display: "flex", flexDirection: "row", marginBottom: "10%" }}>
        <Text style={{ color: "#676767", fontSize: getFontSize(12) }}>*
        </Text>
        <Text style={{ color: "#676767", fontSize: getFontSize(12), fontFamily: "Light", }}>
          We will send you a message to set or reset {"\n"}your new password
        </Text>
      </View>

      <Button title="Submit" onPress={handleValidation} />
    </View>
  );
};

export default Forget;

