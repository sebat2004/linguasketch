import { View, Text } from 'react-native'
import React from 'react'

const CustomHeader = (props) => {
  const language = props.language
  const category = props.category

  if (category === undefined) {
    return (
      <View style={{width: "100%", height: 75, alignItems: 'center', justifyContent: 'center', backgroundColor: "#F4EBE4"}}>
        <Text style={{fontSize: 20}}>{language}</Text>
      </View>
    )
  } else {
    return (
    <View style={{width: "100%", height: 75, alignItems: 'center', justifyContent: 'center', backgroundColor: "#F4EBE4"}}>
        <Text style={{fontSize: 20}}>{category}</Text>
    </View>
    )
  }
}

export default CustomHeader