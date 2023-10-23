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
<<<<<<< HEAD
  const { language, category, eWord, word } = props;
  
=======
  const { language, category } = props;
  const vocabData: any = vocab;

  const getRandomWord = (category: string, language: string) => {
    const categoryData = vocabData[category];

    const englishWords = categoryData['english'];
    const languageWords = categoryData[language];

    const translations = Object.keys(englishWords);
    const words = Object.keys(languageWords);
    const randomIndex = Math.floor(Math.random() * words.length);
    const translation = translations[randomIndex];
    const word = words[randomIndex];

>>>>>>> 7f1962dc9d6c95541d3db33f1d09801174187507
    return (
      <View style={{ backgroundColor: 'white', width: 300 }}>
        <Text>Category: {category}</Text>
        <Text>Language: {language}</Text>
        <Text>English Word: {eWord}</Text>
        <Text>Translation in {language}: {word}</Text>
      </View>
    );
  };


export type { FlashcardProps };
export default Flashcard;