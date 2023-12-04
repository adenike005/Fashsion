import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, ScrollView, ImageBackground, Dimensions } from "react-native";
import Images from "./Images";

const Imagess = [
  Images.Background,
  Images.Background,
  Images.Background,
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Category = () => {
  const scrollViewRef = useRef(null);
  const [imageActive, setImageActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (imageActive + 1) % Imagess.length;
      
      // Scroll to the next index
      scrollViewRef.current?.scrollTo({ x: nextIndex * WIDTH, animated: true });

      // Update the active image index
      setImageActive(nextIndex);
    }, 3000); // Adjust the interval (in milliseconds) as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [imageActive]);

  const onChange = (event) => {
    const slideWidth = WIDTH;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const activeImage = Math.floor(contentOffset / slideWidth);
    setImageActive(activeImage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onChange}
        style={styles.wrap}
      >
        {Imagess.map((image, index) => (
          <ImageBackground
            key={index}
            resizeMode="cover"
            style={styles.image}
            source={image}
            imageStyle={{ borderRadius: 30 }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
});



