import { View, Text } from 'react-native';
import React from 'react';
import vocab from '../app/vocab.json';

type FlashcardProps = {
    language: string,
    category: string,
    eWord: string,
    word: string
}

const FlashcardVocabSide = (props: FlashcardProps) => {
  const { language, category, eWord, word } = props;
  
  return (
    <View style={{backgroundColor: 'white', borderRadius: 20, margin: "5%", width: "80%", height: "100%", justifyContent: 'center', alignItems: 'center', shadowColor: '#171717', shadowOffset: {width: -1, height: 4}, shadowOpacity: 0.2, shadowRadius: 3}}>
      <Text>English Word: {eWord}</Text>
      <Text>Translation in {language}: {word}</Text>
    </View>
  );
};

export type { FlashcardProps };
export default FlashcardVocabSide;