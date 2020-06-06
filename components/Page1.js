import * as React from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';

export default function Page1({ navigation }) {
  return (
    <View >
      <Text>Welcome to Butter! Butter is a task management application for you to keep track of your daily goals.</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Page2')}
      />
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
