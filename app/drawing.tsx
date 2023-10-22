import { View, Text, Button } from 'react-native'
import Flashcard from '../components/Flashcard.tsx'
import { useState } from 'react'
import DrawingBoard from '../components/DrawingBoard.tsx'
import { useLocalSearchParams } from 'expo-router'

const drawing = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const { language, category }: any = useLocalSearchParams()

  return (
    <View style={{flex: 1}}>
      {isFlipped ? <DrawingBoard /> : <Flashcard category={category} language={language} />}
      <Button title="Flip" onPress={() => setIsFlipped(!isFlipped)} />
    </View>
  )
}

export default drawing


