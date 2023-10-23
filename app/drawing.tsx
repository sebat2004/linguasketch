import { Button } from 'react-native'
import Flashcard from '../components/Flashcard'
import { useState } from 'react'
import DrawingBoard from '../components/DrawingBoard'
import { useLocalSearchParams, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'

const drawing = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const { language, category }: any = useLocalSearchParams()

  return (
    <>
      <CustomHeader language={language} category={category} />
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView>
        {isFlipped ? <DrawingBoard {...{language: language, word: 'apple', category: category}}/> : <Flashcard category={category} language={language} word={'word'} />}
        <Button title="Flip" onPress={() => setIsFlipped(!isFlipped)} />
      </SafeAreaView>
    </>
  )
}

export default drawing


