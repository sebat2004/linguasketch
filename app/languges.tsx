import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'

const languges = () => {
  const [language, setLanguage] = useState('spanish');

  return (
    <View>
      <Link 
        href="/categories"
        onPress={() => setLanguage('spanish')}
      >
        Spanish
      </Link>
    </View>
  );
};


export default languges