import { View, Text } from 'react-native'
import React from 'react'

const practice = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', paddingTop: 50 }}>
        <Text style={{fontSize: 30, paddingBottom: 50}}>Practice</Text>
        <View style={{width: 200, height: 200, backgroundColor: 'white', borderRadius: 20, shadowRadius: 10}}>
            <Text style={{fontSize: 30, color: 'white'}}>Hi</Text>
        </View>
    </View>
  )
}

export default practice