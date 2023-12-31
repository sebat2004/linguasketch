import { View, Text, Image, ScrollView } from 'react-native';
import { Link, useLocalSearchParams, Stack } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/CustomHeader';

const categories_page = () => {
  const params: any = useLocalSearchParams();
  const [language, setLanguage] = useState<any>(params.language);

  return (
    <>
      <CustomHeader language={language} />
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#F4EBE4'}}>
      <View style={{flex: 1, width: "100%", alignItems: 'center'}}>
          <Text style={{fontSize: 40, marginTop: -30, marginBottom: 20, color: '#695648', fontWeight: 'bold'}}>Categories</Text>
          <Image style={{width: 290, height: 260, marginBottom: 20}} source={require('../assets/images/bubble2.png')} />
          <View style={{width: '80%', height: 250, justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView style={{width: '100%'}}>
              
                <Link 
                  href={{
                    pathname: "/drawing_page",
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
                    pathname: "/drawing_page",
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
                    pathname: "/drawing_page",
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
                    pathname: "/drawing_page",
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
                    pathname: "/drawing_page",
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
                    pathname: "/drawing_page",
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
        </View>
        
        {/* Review Button */}
        <View style={{width: '100%', alignItems: 'center'}}>
            <Link
              href={{
                pathname: "/review_page",
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
    width: '100%',
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
    width: '80%',
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

export default categories_page;
