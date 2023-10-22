import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'

const categories = () => {
  const [category, setCategory] = useState('sports');

  return (
    <View>
      <Link 
        href="/flashcard"
        onPress={() => setCategory('sports')}
      >
        Sports
      </Link>
    </View>
  );
};


export default categories;