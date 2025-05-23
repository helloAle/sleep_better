// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';

// export default function SleepChartScreen() {
//   const screenWidth = Dimensions.get('window').width;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Seu Histórico de Sono</Text>
//       <LineChart
//         data={{
//           labels: ['Seg', 'Ter', 'Qua', 'Qui'],
//           datasets: [
//             { data: [2, 7, 5, 6, 4, 5, 9] }
//           ]
//         }}
//         width={screenWidth - 40}
//         height={220}
//         chartConfig={{
//           backgroundGradientFrom: '#0B1E3D',
//           backgroundGradientTo: '#0B1E3D',
//           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           labelColor: () => '#fff'
//         }}
//         bezier
//         style={{ borderRadius: 16 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#0B1E3D', padding: 20, alignItems: 'center', justifyContent: 'center' },
//   title: { color: '#fff', fontSize: 24, marginBottom: 20 }
// });
