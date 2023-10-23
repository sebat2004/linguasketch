import { Button } from 'react-native'
import Flashcard from '../components/Flashcard'
import { useEffect, useState } from 'react'
import DrawingBoard from '../components/DrawingBoard'
import { useLocalSearchParams, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import vocab from './vocab.json'

const drawing = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [word, setWord] = useState('')
  const [eWord, setEWord] = useState('')
  const { language, category }: any = useLocalSearchParams()
  const vocabData: any = vocab;

  const getRandomWord = (category: string, language: string) => {
    const categoryData = vocabData[category];

    const englishWords = categoryData['English'];
    const languageWords = categoryData[language];

    const words = Object.keys(languageWords);
    const randomIndex = Math.floor(Math.random() * words.length);
    const eWord = englishWords[randomIndex];
    const word = languageWords[randomIndex];
    console.log(word, eWord)
    return [word, eWord];
  };
  useEffect(() => {
    const [word, eWord] = getRandomWord(category, language);
    setWord(word);
    setEWord(eWord);
  }, [category, language])

  return (
    <>
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4EBE4'}}>
      <CustomHeader language={language} category={category} />
      <Stack.Screen options={{headerShown: false}} />
      {isFlipped ? <DrawingBoard {...{language: language, word: word, category: category, eWord: eWord}}/> : <Flashcard category={category} language={language} word={word} eWord={eWord} />}
      <Button title="Flip" onPress={() => setIsFlipped(!isFlipped)} />
      </SafeAreaView>
    </>
  )
}

export default drawing


