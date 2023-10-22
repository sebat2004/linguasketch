import { View, Text } from 'react-native'
import React from 'react'
import vocab from '../app/vocab.json'

type FlashcardProps = {
    language: string,
    category: string
}

const Flashcard = (props: FlashcardProps) => {

  return (
    <View style={{backgroundColor: 'white', width: 300}}>
      <Text>{props.language}</Text>
      <Text>{props.category}</Text>
    </View>
  )
}

export default Flashcard;