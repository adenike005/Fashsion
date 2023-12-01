import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio } from 'react-native';
import Color from "../Navigation/Color"


const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.Red,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: getFontSize(15),
    // fontWeight: 'bold',
    fontFamily:"Black",
  },
});

export default Button;
