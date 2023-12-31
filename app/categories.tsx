import { View, Text, Image, ScrollView } from 'react-native';
import { Link, useLocalSearchParams, Stack } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/CustomHeader';

const Categories = () => {
  const params: any = useLocalSearchParams();
  const [language, setLanguage] = useState<any>(params.language);

  return (
    <>
      <CustomHeader language={language} />
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#F4EBE4'}}>
        <Image style={{width: 290, height: 260, marginLeft: 40, marginBottom: 40}} source={require('../assets/images/bubble2.png')} />
        <View style={{width: '100%', height: 150, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView style={{}}>
            
              <Link 
                href={{
                  pathname: "/drawing",
                  params: {
                    language: language,
                    category: 'transportation'
                  }
                }}
                style={styles.link}
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
                style={styles.link}
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
                style={styles.link}
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
                style={styles.link}
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
                style={styles.link}
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
                style={styles.link}
              >
                Sports
              </Link>
        </ScrollView>
        </View>
        
        {/* Review Button */}
        <View style={{alignSelf: 'center', bottom: -40, width: '90%', flexWrap: 'wrap'}}>
            <Link
              href={{
                pathname: "/review",
                params: {
                  language: language
                }
              }}
              style={styles.reviewButton}
            >
              Review Your Flashcards
            </Link>
          </View>

      </SafeAreaView>
    </>
  );
};

const styles = {
  link: { 
    overflow: 'hidden',
    fontSize: 20,
    marginBottom: 20,
    width: 300,
    height: 50,
    color: '#E4CDBC',
    textAlign: "center",
    lineHeight: 50,
    backgroundColor: '#695648',
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  reviewButton: {
    overflow: 'hidden',
    fontSize: 30,
    width: '100%',
    height: 100,
    color: '#E4CDBC',
    textAlign: "center",
    lineHeight: 100,
    backgroundColor: '#695648',
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  },
};

export default Categories;
