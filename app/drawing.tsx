import { Button, View } from 'react-native'
import Flashcard from '../components/Flashcard'
import { useEffect, useState } from 'react'
import DrawingBoard from '../components/DrawingBoard'
import { useLocalSearchParams, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import vocab from './vocab.json'
import { Text } from 'react-native'

const drawing = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [refresh, setRefresh] = useState(false);
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
  }, [category, language, refresh])

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#F4EBE4'}}>
        <CustomHeader language={language} category={category} />
        <Stack.Screen options={{headerShown: false}} />
        {
          isFlipped ? <Text style={{textAlign: 'center', marginTop: 80}}>{eWord + ' : ' + word}</Text> 
          :
          <Text style={{marginTop: 80}}></Text>
        }
        <View style={{alignItems: 'center', justifyContent: 'flex-start', height: 350, marginBottom: 80}}>
          {
            isFlipped ? <DrawingBoard {...{language: language, word: word, category: category, eWord: eWord}}/> 
            : 
            <Flashcard category={category} language={language} word={word} eWord={eWord} />
          }
        </View>
        <View style={{marginBottom: "1%"}}>
          <Button color="#695648" title="Flip" onPress={() => setIsFlipped(!isFlipped)} />
        </View>
          <Button color="#695648" title="Next Word" onPress={() => { setIsFlipped(false); setRefresh(!refresh); }} />
      </SafeAreaView>
    </>
  )
}

export default drawing


