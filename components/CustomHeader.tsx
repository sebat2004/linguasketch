import { View, Text } from 'react-native'
import React from 'react'

const CustomHeader = (props) => {
  const language = props.language
  return (
    <View style={{width: "100%", height: 50, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{language}</Text>
    </View>
  )
}

export default CustomHeader