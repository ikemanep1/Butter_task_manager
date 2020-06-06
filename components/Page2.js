import * as React from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';

export default function Page2({ navigation }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Butter</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Page3')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};



const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: '#ffd200',
    fontFamily: 'serif'
  },
  text: {
      color: '#ffffff',
      fontSize: 30,
      textAlign: 'center'
  }
});