import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const index = () => {
  return (
    <View style={{}}>
      <Text>Hi</Text>
      <Link href="/practice">Go to practice</Link>
      <Link href="/canvas">Go to canvas</Link>
    </View>
  )
}

export default index