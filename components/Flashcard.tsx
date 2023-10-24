import { View, Text } from 'react-native';
import React from 'react';
import vocab from '../app/vocab.json';

type FlashcardProps = {
    language: string,
    category: string,
    eWord: string,
    word: string
}

const Flashcard = (props: FlashcardProps) => {
  const { language, category, eWord, word } = props;
  
    return (
      <View style={{backgroundColor: 'white', margin: "5%", width: "90%", height: "55%", marginBottom: 110, justifyContent: 'center', alignItems: 'center'}}>
        <Text>English Word: {eWord}</Text>
        <Text>Translation in {language}: {word}</Text>
      </View>
    );
  };

export type { FlashcardProps };
export default Flashcard;