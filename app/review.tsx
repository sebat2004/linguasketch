import { Button, Text, View } from 'react-native'
import ImageDisplay from '../components/ImageDisplay'
import { useState, useEffect, useRef } from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from "@react-native-async-storage/async-storage"
import vocab from './vocab.json'
import CustomHeader from '../components/CustomHeader'

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
  const [answer, setAns] = useState<string>('');
  const [isFlipped, setIsFlipped] = useState(false)
  const wordMap = useRef<Map<string, string>>(new Map<string, string>());
  const { language, category }: any = useLocalSearchParams()
  const vocabData: Object = vocab;

  useEffect(() => {
    setAns(prev => { return words[index] ? wordMap.current.get(words[index])! : '' });
  }, [words, index]);
    
  useEffect(() => { 
    for(let cat in vocabData){
      const eAr: string[] = vocabData[cat]['English'];
      const tAr: string[] = vocabData[cat][language];

      for(let i = 0; i < eAr.length; i++){
        wordMap.current.set(eAr[i], tAr[i]);
      }
    }

    console.log(wordMap);

    fWords();
  }, []);

  const fWords = async () => {
    const wString = await AsyncStorage.getItem(language);

    if(wString) {
      console.log(wString);
      
      setWords(shuffle(wString.split(';')));
    } else {
      setWords([]);
    }  
  }

  const prev = () => {
    console.log(index);
    setIndex(prev => prev ? prev - 1 : 0);
  }

  const next = () => {
    console.log(index);
    setIndex(prev => prev + 1 < words.length ? prev + 1 : prev);
  }

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <CustomHeader language={language} category={category} />
      <SafeAreaView style={{backgroundColor: '#F4EBE4', alignItems: 'center'}}>
        <Text style={{fontSize: 40, marginBottom: 20, color: '#695648', fontWeight: 'bold'}}>Review!</Text>
        <ImageDisplay {...{language: language, eWord: words[index], word: words[index], category: category}}/> 
        <View style={{paddingTop: 50, alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 600}}>Current Word</Text>
          <Text style={{fontSize: 20, fontWeight: 400}}>{words[index]}</Text>
        </View>
        <View style={{backgroundColor: '#F4EBE4', marginTop: 45, alignItems: 'center'}}>
          {isFlipped && <Text style={{fontSize: 20, fontWeight: 400}}>{answer}</Text>}
          <Button color="#695648" title="Check" onPress={() => setIsFlipped(!isFlipped)} />
          <View style={{backgroundColor: '#F4EBE4', flexWrap: 'wrap', display: 'flex', flexDirection: 'row', width: "100%", gap: 50, paddingBottom: 500}}>
            <Button onPress={prev} title="Prev" color="#695648" />
            <Button onPress={next} title="Next" color="#695648" /> 
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default review


