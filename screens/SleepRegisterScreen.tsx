// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SleepEntry } from '../SleepData';
// import { useNavigation } from '@react-navigation/native';

// export default function SleepRegisterScreen() {
//   const [hours, setHours] = useState<string>('');
//   const navigation = useNavigation();

//   const saveSleepEntry = async () => {
//     const parsedHours = parseFloat(hours);
//     if (isNaN(parsedHours) || parsedHours < 0 || parsedHours > 24) {
//       Alert.alert('Informe um número válido de horas');
//       return;
//     }

//     const newEntry: SleepEntry = {
//       date: new Date().toISOString().split('T')[0],
//       hoursSlept: parsedHours,
//     };

//     try {
//       const existing = await AsyncStorage.getItem('sleepData');
//       const data: SleepEntry[] = existing ? JSON.parse(existing) : [];
//       data.push(newEntry);
//       await AsyncStorage.setItem('sleepData', JSON.stringify(data));
//       Alert.alert('Registrado com sucesso!');
//       setHours('');
//       navigation.navigate('SleepGraph');
//     } catch (error) {
//       Alert.alert('Erro ao salvar os dados.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Registrar Sono</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Horas dormidas (ex: 7.5)"
//         keyboardType="numeric"
//         value={hours}
//         onChangeText={setHours}
//       />
//       <Button title="Salvar" onPress={saveSleepEntry} color="#1f6f8b" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#0d1b2a' },
//   title: { fontSize: 24, color: '#fff', textAlign: 'center', marginBottom: 20 },
//   input: { backgroundColor: '#fff', padding: 10, marginBottom: 20, borderRadius: 5 },
// });
