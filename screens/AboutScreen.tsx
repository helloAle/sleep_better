import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Sleep Better</Text>
      <Text style={styles.text}>Versão 0.0.3</Text>
      <Text style={styles.text}>Notas de atualização: 22/05/2025</Text>
      <Text style={styles.text}>Tecnologias: React Native, TypeScript, React Navigation</Text>

      <Text style={styles.sectionTitle}>🚧 Futuras funcionalidades</Text>
      <Text style={styles.text}>• Integração com notificações</Text>
      <Text style={styles.text}>• Monitoramento de sono</Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          App desenvolvido por{' '}
          <Text
            style={{ color: '#1f6f8b', textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('https://github.com/helloAle')}
          >
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
    padding: 20,
    paddingBottom: 60, // para o footer não sobrepor
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionTitle: {
    marginTop: 25,
    marginBottom: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#a3b8cc',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
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