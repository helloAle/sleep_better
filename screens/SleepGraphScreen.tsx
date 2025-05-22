// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LineChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';
// import { SleepEntry } from '../SleepData';

// export default function SleepGraphScreen() {
//   const [sleepData, setSleepData] = useState<SleepEntry[]>([]);

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await AsyncStorage.getItem('sleepData');
//       if (data) {
//         setSleepData(JSON.parse(data));
//       }
//     };
//     loadData();
//   }, []);

//   const chartData = {
//     labels: sleepData.map(item => item.date),
//     datasets: [
//       {
//         data: sleepData.map(item => item.hoursSlept),
//         color: () => '#1f6f8b',
//         strokeWidth: 2,
//       },
//     ],
//   };

//   return (
//     <ScrollView style={{ backgroundColor: '#0d1b2a', flex: 1 }}>
//       <Text style={styles.title}>Seu Histórico de Sono</Text>
//       {sleepData.length > 0 ? (
//         <LineChart
//           data={chartData}
//           width={Dimensions.get('window').width - 20}
//           height={300}
//           yAxisSuffix="h"
//           yAxisInterval={1}
//           chartConfig={{
//             backgroundColor: '#0d1b2a',
//             backgroundGradientFrom: '#1f6f8b',
//             backgroundGradientTo: '#1f6f8b',
//             decimalPlaces: 1,
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             propsForDots: { r: '4', strokeWidth: '2', stroke: '#1f6f8b' },
//           }}
//           bezier
//           style={{ marginVertical: 20, borderRadius: 16 }}
//         />
//       ) : (
//         <Text style={{ color: '#a3b8cc', textAlign: 'center' }}>Nenhum dado registrado.</Text>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   title: { fontSize: 24, color: '#fff', textAlign: 'center', marginTop: 20 },
// });
