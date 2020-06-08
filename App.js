import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import ListItem from './components/ListItem';
import Header from './shared/Header';
import PageHome from './components/PageHome';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Page1} options={{
          title: 'Welcome',
          headerStyle: {
            backgroundColor: '#ffd11a',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Page2" component={Page2} options={{
          title: 'How to use',
          headerStyle: {
            backgroundColor: '#ffd11a',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Page3" component={Page3} options={{
          title: 'Feel free to organize',
          headerStyle: {
            backgroundColor: '#ffd11a',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="ListItem" component={ListItem} options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: '#ffd11a',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
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
