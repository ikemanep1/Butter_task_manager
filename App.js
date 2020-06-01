import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='butter' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: '#ffd200', fontSize: 30
  }
});
