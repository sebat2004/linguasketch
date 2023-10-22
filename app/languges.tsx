import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'

const languges = () => {
  const [language, setLanguage] = useState('spanish');

  return (
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
    </View>
  );
};


export default languges