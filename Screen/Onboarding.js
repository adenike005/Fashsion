import React, { useRef, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, PixelRatio, TouchableOpacity } from 'react-native';
import Images from '../Navigation/Images';
import Color from '../Navigation/Color';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const slides = [
  {
    id: '1',
    images: Images.Onboarding,
    title: 'Choose Products',
    subtitle: 'Amet minim mollit non deserunt ullamco est \n  sit aliqua dolor do amet sint. Velit officia \n  consequat duis enim velit mollit.',
  },
  {
    id: '2',
    images: Images.Onboarding2,
    title: 'Make Payment',
    subtitle: 'Amet minim mollit non deserunt ullamco est \n  sit aliqua dolor do amet sint. Velit officia \n  consequat duis enim velit mollit.',
  },
  {
    id: '3',
    images: Images.Onboarding3,
    title: 'Get Your Order',
    subtitle: 'Amet minim mollit non deserunt ullamco est \n  sit aliqua dolor do amet sint. Velit officia \n  consequat duis enim velit mollit.',
  },
];

const PaginationDot = ({ active }) => (
  <View
    style={{
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
      backgroundColor: active ? Color.Black : Color.Gray,
    }}
  />
);

const Slide = ({ item, index, navigation }) => {
  return (
    <View style={{}}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 40, paddingHorizontal: 20 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>{index + 1}/</Text>
          <Text style={{ color: Color.Gray }}>{slides.length}</Text>
        </View>
      </View>
      <View style={{ width: '100%', height: '70%' }}>
        <Image source={item.images} style={{ height: '100%', width, resizeMode: 'contain' }} />
      </View>
      <View>
        <Text style={{textAlign:"center", fontSize: getFontSize(18), fontFamily:"Bold", }}>{item.title}</Text>
        <Text style={{textAlign:"center", color:Color.Gray, marginTop:10,  letterSpacing:0.75, 
         color:Color.Gray, fontFamily:"Medium", fontSize: getFontSize(12), lineHeight: getFontSize(24)}}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const currentIndex = viewableItems[0].index;
      setActiveIndex(currentIndex);
    }
  }).current;

  const handleNext = () => {
    const nextIndex = activeIndex + 1;
    if (nextIndex < slides.length) {
      flatListRef.current.scrollToIndex({ index: nextIndex });
    } else {
      // If it's the last slide, navigate to the home screen
      navigation.navigate('Home'); // Replace 'Home' with the actual screen name
    }
  };

  const handlePrev = () => {
    const prevIndex = activeIndex - 1;
    if (prevIndex >= 0) {
      flatListRef.current.scrollToIndex({ index: prevIndex });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.White }}>
      <FlatList
        data={slides}
        pagingEnabled
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Slide item={item} index={index} navigation={flatListRef.current} />}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        ref={flatListRef}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>
        {activeIndex > 0 && (
          <TouchableOpacity onPress={handlePrev}>
            <Text style={{ color: Color.Gray, fontSize: getFontSize(14) }}>Prev</Text>
          </TouchableOpacity>
        )}
       
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          {slides.map((_, index) => (
            <PaginationDot key={index} active={index === activeIndex} />
          ))}
        </View>
        {activeIndex < slides.length - 1 ? (
          <TouchableOpacity onPress={handleNext}>
            <Text style={{ color: Color.Red, fontSize: getFontSize(14) }}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: Color.Red, fontSize: getFontSize(14) }}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;







