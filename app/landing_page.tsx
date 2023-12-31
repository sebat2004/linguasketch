import { View, Text, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const landing_page = () => {
    return (
        <>
          <LinearGradient
            colors={['#D69D5B', '#E8D6B9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.linearGradient}
          >
            <Image
            source={require('../assets/images/beav.png')}
            style={{width: 275, height: 255, marginTop: 105, alignSelf: 'center'}}   
            />
            <Text style={{fontSize: 40, fontWeight: '300', marginTop: 100, alignSelf: 'center'}}>LinguaSketch</Text>
            <Ionicons/>
            <Link href="/languages_page" 
              style={{
                overflow: 'hidden',
                alignSelf: 'center', 
                marginTop: 40, 
                width: 200, 
                height: 40, 
                backgroundColor: "#695648", 
                textAlign: "center", 
                fontSize: 20,
                lineHeight: 40,
                borderRadius: 10,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                color: '#E4CDBC',
              }}
            >
              Tap to Begin
            </Link>
          </LinearGradient>
        </>
      );
    };
    
    const styles = StyleSheet.create({
      linearGradient: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
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
    

export default landing_page