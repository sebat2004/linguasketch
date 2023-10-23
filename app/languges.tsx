import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { Screen } from 'expo-router/build/views/Screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Languages = () => {
  const [language, setLanguage] = useState('spanish');

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#F4EBE4'}}>
        <Image style={{width: 330, height: 300, marginTop: 30, marginLeft: 80}} source={require('../assets/images/bubble1.png')} />
        <View style={{flex: 4, marginHorizontal: "auto", width: "100%", alignItems: 'center', marginTop: -10}}>
          <Link
            href={{
              pathname: "/categories",
              params: { language: 'spanish' }
            }}
            style={styles.flag}
            onPress={() => setLanguage('spanish')}
          >
            Spanish
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'french' }
            }}
            style={styles.flag}
            onPress={() => setLanguage('french')}
          >
            French
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'chinese' }
            }}
            style={styles.flag}
            onPress={() => setLanguage('chinese')}
          >
            Chinese
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'german' }
            }}
            style={styles.flag}
            onPress={() => setLanguage('german')}
          >
            German
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'korean' }
            }}
            style={{...styles.flag, marginTop: 20}}
            onPress={() => setLanguage('korean')}
          >
            Korean
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = {
  flag: { 
    fontSize: 30,
    marginTop: 20,
    width: 300, 
    height: 50,
    color: '#E4CDBC',
    textAlign: "center",
    lineHeight: 50,
    backgroundColor: '#695648',
    backgroundImage: 'url(../assets/images/flag.png)',
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
};

export default Languages;
