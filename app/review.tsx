import { Button, Text, View } from 'react-native'
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

  const prev = () => {
    setIndex(prev => prev ? prev - 1 : 0);
  }

  const next = () => {
    setIndex(prev => prev + 1 < words.length ? prev + 1 : prev);
  }

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView>
        <Text>{'Word: ' + words[index]}</Text>
        <ImageDisplay {...{language: language, word: words[index], category: category}}/> 
        {/* { isFlipped && <Flashcard category={category} language={language} word={words[index]} /> } */}
        <Button title="Check" onPress={() => setIsFlipped(!isFlipped)} />
      </SafeAreaView>
      <View style={{flexWrap: 'wrap', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: "100%"}}>
        <Button onPress={prev} title="Prev" color="#841584" />
        <Button onPress={next} title="Next" color="#841584" /> 
      </View>
    </>
  )
}

export default review


