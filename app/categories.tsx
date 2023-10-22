import { View, Text } from 'react-native'
import { Link, useGlobalSearchParams } from 'expo-router'
import React, { useState } from 'react'

const categories = () => {
  const language: any = useGlobalSearchParams() 
  const [category, setCategory] = useState('sports');
  console.log(language)

  return (
    <View>
      <Link 
        href={{
          pathname: "/flashcard",
          params: {
            category: category,
            language: language
          }
        }}
        onPress={() => setCategory('transportation')}
      >
        Transportation
      </Link>
      <Link 
        href={{
          pathname: "/flashcard",
          params: {
            category: category,
            language: language
          }
        }}
        onPress={() => setCategory('colors')}
      >
        Colors
      </Link>
      <Link 
        href={{
          pathname: "/flashcard",
          params: {
            category: category,
            language: language
          }
        }}
        onPress={() => setCategory('food')}
      >
        Food
      </Link>
      <Link 
        href={{
          pathname: "/flashcard",
          params: {
            category: category,
            language: language
          }
        }}
        onPress={() => setCategory('clothing')}
      >
        Clothing
      </Link>
      <Link 
        href={{
          pathname: "/flashcard",
          params: {
            category: category,
            language: language
          }
        }}
        onPress={() => setCategory('occupations')}
      >
        Occupations
      </Link>
      <Link 
        href={{
          pathname: "/flashcard",
          params: {
            category: category,
            language: language
          }
        }}
        onPress={() => setCategory('sports')}
      >
        Sports
      </Link>
    </View>
  );
};


export default categories;