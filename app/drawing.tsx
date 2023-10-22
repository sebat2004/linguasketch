import { View, Text, Button } from 'react-native'
import Flashcard from '../components/Flashcard.tsx'
import { useState } from 'react'
import DrawingBoard from '../components/DrawingBoard.tsx'
import { useLocalSearchParams, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const drawing = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const { language, category }: any = useLocalSearchParams()

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView>
        {isFlipped ? <DrawingBoard /> : <Flashcard category={category} language={language} />}
        <Button title="Flip" onPress={() => setIsFlipped(!isFlipped)} />
      </SafeAreaView>
    </>
  )
}

export default drawing


