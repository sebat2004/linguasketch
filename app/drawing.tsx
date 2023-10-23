import { View, Text, Button } from 'react-native'
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
      <SafeAreaView>
        <CustomHeader />
        <Stack.Screen options={{headerShown: false}} />
        <View style={{marginTop: 50}}>
        <DrawingBoard {...{language: 'spanish', word: 'apple', category: 'etc'}}/>
        </View>
        <Button title="Flip" onPress={() => setIsFlipped(!isFlipped)} />
      </SafeAreaView>
    </>
  )
}

export default drawing


