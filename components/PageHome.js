import * as React from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';
import ListDream from './ListDream';
import ListHope from './ListHope';
import ListItem from './ListItem';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './shared/Header';

const Drawer = createDrawerNavigator();

export default function PageHome() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={ListItem} options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: '#ffd11a',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="ListHope" component={ListHope} options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: '#ffd11a',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="ListDream" component={ListDream} options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: '#ffd11a',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Drawer.Navigator>
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