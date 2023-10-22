import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import {Screen} from 'react-native-screens'

const languges = () => {
  const [language, setLanguage] = useState('spanish');

  return (
    <Screen>
      <View>
        <Link
          href={{
            pathname: "/categories",
            params: { language: 'spanish' }
          }}
          onPress={() => setLanguage('spanish')}
        >
          Spanish
        </Link>
        <Link 
          href={{
            pathname: "/categories",
            params: { language: 'french' }
          }}
          onPress={() => setLanguage('french')}
        >
          French
        </Link>
        <Link 
          href={{
            pathname: "/categories",
            params: { language: 'chinese' }
          }}
          onPress={() => setLanguage('chinese')}
        >
          Chinese
        </Link>
        <Link 
          href={{
            pathname: "/categories",
            params: { language: 'german' }
          }}
          onPress={() => setLanguage('german')}
        >
          German
        </Link>
        <Link 
          href={{
            pathname: "/categories",
            params: { language: 'korean' }
          }}
          onPress={() => setLanguage('korean')}
        >
          Korean
        </Link>
        <Link href="/canvas" >Canvas</Link>
      </View>
    </Screen>
  );
};


export default languges