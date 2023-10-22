import { View, Text } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'

const categories = () => {
  const params: any = useLocalSearchParams() 
  const [language, setLanguage] = useState(params.language)

  return (
    <View>
      <Link 
        href={{
          pathname: "/drawing",
          params: {
            language: language,
            category: 'transportation'
          }
        }}
      >
        Transportation
      </Link>
      <Link 
        href={{
          pathname: "/drawing",
          params: {
            language: language,
            category: 'colors'
          }
        }}
      >
        Colors
      </Link>
      <Link 
        href={{
          pathname: "/drawing",
          params: {
            language: language,
            category: 'food'
          }
        }}
      >
        Food
      </Link>
      <Link 
        href={{
          pathname: "/drawing",
          params: {
            language: language,
            category: 'clothing'
          }
        }}
      >
        Clothing
      </Link>
      <Link 
        href={{
          pathname: "/drawing",
          params: {
            language: language,
            category: 'occupations'
          }
        }}
      >
        Occupations
      </Link>
      <Link 
        href={{
          pathname: "/drawing",
          params: {
            language: language,
            category: 'sports'
          }
        }}
      >
        Sports
      </Link>
    </View>
  );
};


export default categories;