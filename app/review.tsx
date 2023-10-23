import { Button, Text } from 'react-native'
import ImageDisplay from '../components/ImageDisplay'
import { useState, useEffect } from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from "@react-native-async-storage/async-storage"

//Shuffle Algo
const shuffle = (array: string[]) => {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
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

    console.log(wString);

    if(wString) {
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
        {/* {isFlipped ? <Text>Answer:</Text> : <Flashcard category={category} language={language} word={words[index]} />} */}
        <Button title="Check" onPress={() => setIsFlipped(!isFlipped)} />
      </SafeAreaView>
    </>
  )
}

export default review


