import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Languages = () => {
  const [language, setLanguage] = useState('spanish');

  const clear = async () => {
    console.log('Clearing');
    await AsyncStorage.clear();
  };

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#F4EBE4'}}>
        <Image style={{width: 280, height: 250, marginTop: 30, marginLeft: 50}} source={require('../assets/images/bubble1.png')} />
        <View style={{flex: 4, marginHorizontal: "auto", width: "100%", alignItems: 'center', marginTop: -10}}>
          <Link
            href={{
              pathname: "/categories",
              params: { language: 'Spanish' }
            }}
            style={styles.flag}
            onPress={() => setLanguage('Spanish')}
          >
            Spanish
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'French' }
            }}
            style={styles.flag}
            onPress={() => setLanguage('French')}
          >
            French
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'Chinese' }
            }}
            style={styles.flag}
            onPress={() => setLanguage('Chinese')}
          >
            Chinese
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'German' }
            }}
            style={styles.flag}
            onPress={() => setLanguage('German')}
          >
            German
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'Korean' }
            }}
            style={{...styles.flag, marginTop: 20}}
            onPress={() => setLanguage('Korean')}
          >
            Korean
          </Link>
          <Link 
            href={{
              pathname: "/categories",
              params: { language: 'Korean' }
            }}
            style={{...styles.flag, marginTop: 20}}
            onPress={() => clear()}
          >
            Clear Cache
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = {
  flag: { 
    overflow: 'hidden',
    fontSize: 25,
    marginTop: 20,
    width: 300, 
    fontSize: 30,
    marginTop: 20,
    width: 300, 
    height: 50,
    color: '#E4CDBC',
    textAlign: "center",
    lineHeight: 50,
    backgroundColor: '#695648',
    color: '#E4CDBC',
    textAlign: "center",
    lineHeight: 50,
    backgroundColor: '#695648',
    backgroundImage: 'url(../assets/images/flag.png)',
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
};

export default Languages;