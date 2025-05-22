import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, Image, ScrollView, Linking } from 'react-native';



export default function AboutScreen() {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Sobre o Sleep Better</Text>
    <Text style={styles.text}>Versão 0.0.1</Text>

    <View style={styles.footer}>
      <Text style={styles.footerText}>
        App desenvolvido por{' '}
        <Text
          style={{ color: '#1f6f8b', textDecorationLine: 'underline' }}
          onPress={() => Linking.openURL('https://github.com/helloAle')}>
          github.com/helloAle
        </Text>
      </Text>
    </View>
  </View>
);

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b2a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },

  
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0d1b2a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#1f6f8b',
  },
  footerText: {
    color: '#a3b8cc',
    textAlign: 'center',
    fontSize: 12,
  },

});

//    _____                                            .___
//   / ___ \  _________________  ________    ____    __| _/
//  / / ._\ \/  ___/\___   /\  \/  /\__  \  /    \  / __ | 
// <  \_____/\___ \  /    /  >    <  / __ \|   |  \/ /_/ | 
//  \_____\ /____  >/_____ \/__/\_ \(____  /___|  /\____ | 
//               \/       \/      \/     \/     \/      \/ 