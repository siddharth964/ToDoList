import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodayTask from './app/assets/screens/TodayTaskScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <TodayTask/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED'
  },
});
