import { View, Text } from 'react-native'
import { Link, Stack } from 'expo-router'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { Screen } from 'expo-router/build/views/Screen'
import { SafeAreaView } from 'react-native-safe-area-context';

const languges = () => {
  const [language, setLanguage] = useState('spanish');

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <Image style={{width: 150, height: 140, marginTop: 60}} source={require('../assets/images/beav.png')} />
        <View style={{flex: 4, marginHorizontal: "auto", width: "100%"}}>
          <View style={{flexDirection: "row", marginTop: 180}}>
            <View style={styles.column}>
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
            </View>
            <View style={styles.column}>
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
            </View>
          </View>
          <Link 
              href={{
                pathname: "/categories",
                params: { language: 'korean' }
              }}
              style={{ alignSelf: 'center', paddingTop: 50}}
              onPress={() => setLanguage('korean')}
            >
              Korean
            </Link>
        </View>
      </SafeAreaView>
    </>
  );
};

// Styles
const styles = {
  flag: { 
    flexDirection: "row",
    width: 75, 
    height: 50,
    backgroundColor: 'red',
    backgroundImage: 'url(../assets/images/flag.png)',
  },
  column: {
    flex: 2, 
    alignItems: 'center', 
    width: 100, 
    gap: 60,
  },
};


export default languges