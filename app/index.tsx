import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const index = () => {
  return (
    <View>
      <Text>Hi</Text>
      <Link href="/modes">Get Start</Link>
    </View>
  )
}

export default index