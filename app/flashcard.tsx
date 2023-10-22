import { View, Text } from 'react-native'
import { Link, useGlobalSearchParams, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import vocab from './vocab.json';

const flashcard = () => {
  const { language, category } = useLocalSearchParams()
  return (
    <View>
      <Text>language: {language}, category: {category}</Text>
    </View>
  );
};


export default flashcard;