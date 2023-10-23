import { View, Text } from 'react-native';
import React from 'react';
import vocab from '../app/vocab.json';

type FlashcardProps = {
    language: string,
    category: string,
}

const Flashcard = (props: FlashcardProps) => {
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

    return (
      <View style={{ backgroundColor: 'white', width: 300 }}>
        <Text>Category: {category}</Text>
        <Text>Language: {language}</Text>
        <Text>English Word: {englishWords[translation]}</Text>
        <Text>Translation in {language}: {languageWords[word]}</Text>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: 'white', width: 300 }}>
      {getRandomWord(category, language)}
    </View>
  );
};

export type { FlashcardProps };
export default Flashcard;
