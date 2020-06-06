import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import ListItem from './components/ListItem';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="ListItem" component={ListItem} />
    </Stack.Navigator>
    }</NavigationContainer>
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
