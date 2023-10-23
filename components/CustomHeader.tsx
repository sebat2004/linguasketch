import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const CustomHeader = (props) => {
  const language = props.language
  const category = props.category

  if (category === undefined) {
    return (
      <View style={{width: "100%", height: 55, justifyContent: 'flex-end', backgroundColor: "#F4EBE4"}}>
        <Link href={
          {pathname: "/languges"}
        } style={{fontSize: 20, paddingLeft: 15}}><AntDesign name="caretleft" size={25} color="black" /></Link>
      </View>
    )
  } else {
    return (
    <View style={{width: "100%", height: 50, justifyContent: 'center', backgroundColor: "#F4EBE4"}}>
        <Link href={
          {
            pathname: "/categories",
            params: { language: language }
          }
        } style={{fontSize: 20, paddingLeft: 20}}><AntDesign name="caretleft" size={25} color="black" /></Link>
    </View>
    )
  }
}

export default CustomHeader