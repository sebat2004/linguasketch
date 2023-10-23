import { View, Text } from 'react-native'
import { Link, useLocalSearchParams, Stack } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const categories = () => {
  const params: any = useLocalSearchParams() 
  const [language, setLanguage] = useState(params.language)

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView>
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
      </SafeAreaView>
    </>
  );
};


export default categories;