import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadarChart1 from './component/RadarChart1';
import RadarChart2 from './component/RadarChart2';
export default function App() {
  
  return (
    <View style={styles.container}>
     <RadarChart1></RadarChart1>
     {/* <RadarChart2></RadarChart2> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
