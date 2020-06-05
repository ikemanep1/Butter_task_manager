import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import uuid from 'react-native-uuid';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function App() {
  const [items, setItems] = useState ([
    {id: uuid(), text: 'complete tutorials'},
    {id: uuid(), text: 'complete models'},
    {id: uuid(), text: 'complete exercises'},
    {id: uuid(), text: 'complete all tasks'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

 const addItem = (text) => {
   if(!text) {
    Alert.alert('Error', 'Add content to the task', {text: 'Ok'});
   } else {
     setItems(prevItems => {
       return [{id: uuid(), text}, ...prevItems];
     });
   }
 }

  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Page1} />
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
