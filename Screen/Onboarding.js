import { View, Text } from 'react-native'
import React from 'react'
import Images from '../Navigation/Images'
import Color from '../Navigation/Color,'
import { SIZES } from '../Navigation/SIZES'


const slides =[
    {
        id: "1",
        images: Images.Onboarding,
        title:"Choose Products",
        subtitle:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },

    {
        id: "2",
        images: Images.Onboarding2,
        title:"Make Payment",
        subtitle:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
        id: "3",
        images: Images.Onboarding3,
        title:"Get Your Order",
        subtitle:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    }


]

const Onboarding = () => {
    
  return (
    <View>
      <Text>Onboarding</Text>
    </View>
  )
}

export default Onboarding
