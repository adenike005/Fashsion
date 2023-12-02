// CustomDrawerContent.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.drawerItem}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('Settings')}>
        <Text style={styles.drawerItem}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CustomDrawerContent;
