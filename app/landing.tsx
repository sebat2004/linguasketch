import { View, Text, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const landing = () => {
    return (
        <>
          <LinearGradient
            colors={['#D69D5B', '#E8D6C9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.linearGradient}
          >
            <Image
            source={require('../assets/images/beav.png')}
            style={{width: 225, height: 210, marginTop: 130, alignSelf: 'center'}}   
            />
            <Text style={{fontSize: 40, fontWeight: '300', marginTop: 100, alignSelf: 'center'}}>LinguaSketch</Text>
            <Ionicons/>
            <Link href="/categories">Go To Index</Link>
          </LinearGradient>
        </>
      );
    };
    
    const styles = StyleSheet.create({
      linearGradient: {
        flex: 1,
        alignContent: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#cc2b5e',
        backgroundColor: 'transparent',
      },
    });
    

export default landing