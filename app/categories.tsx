import { View, Text } from 'react-native';
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
      <SafeAreaView style={{flex: 1, backgroundColor: '#F4EBE4'}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
          
          {/* Column 1 */}
          <View>
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
          </View>
          
          {/* Column 2 */}
          <View>
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
          </View>
        </View>
        
        {/* Review Button */}
        <View style={{alignSelf: 'center', marginTop: 20, width: '90%', flexWrap: 'wrap'}}>
            <Link
              href={{
                pathname: "/review",
                params: {
                  language: language
                }
              }}
              style={styles.reviewButton}
            >
              Wide Button Text
            </Link>
          </View>

      </SafeAreaView>
    </>
  );
};

const styles = {
  link: { 
    overflow: 'hidden',
    fontSize: 22,
    marginTop: 20,
    width: 200,
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
