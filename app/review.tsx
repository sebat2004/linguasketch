import { Button, Text } from 'react-native'
import Flashcard from '../components/Flashcard'
import { useState, useEffect } from 'react'
import ImageDisplay from '../components/ImageDisplay'
import { useLocalSearchParams, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from "@react-native-async-storage/async-storage"

//Knuth Shuffle Algo
const shuffle = (array: string[]): string[] => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

const review = () => {
  const [index, setIndex] = useState(0);
  const [words, setWords] = useState<string[]>([]);
  const [isFlipped, setIsFlipped] = useState(false)
  const { language, category }: any = useLocalSearchParams()

  useEffect(() => { fWords(); }, []);

  const fWords = async () => {
    const wString = await AsyncStorage.getItem(language);

    if(wString) {
      console.log(wString);
      setWords(shuffle(wString.split(';')));
    } else {
      setWords([]);
    }  
  }

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView>
        <Text>{'Word: ' + words[index]}</Text>
        <ImageDisplay {...{language: language, word: words[index], category: category}}/> 
        {isFlipped ? <Text>Answer:</Text> : <Flashcard category={category} language={language} word={words[index]} />}
        <Button title="Check" onPress={() => setIsFlipped(!isFlipped)} />
      </SafeAreaView>
    </>
  )
}

export default review


