import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import uuid from 'react-native-uuid';
import AddItem from './AddItem';


export default function ListItem({navigation}, item) {
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
    <View>
      <Text>Add your daily tasks!</Text>
      <AddItem />
      <Button title="Hopes list" onPress={() => navigation.navigate('ListHope')}/>
      <Button title="Hopes list" onPress={() => navigation.navigate('ListDream')}/>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    <TouchableOpacity style={styles.listItem}>
        <View style={StyleSheet.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Icon name="remove" size={20} color="firebrick" 
            onPress={() => deleteItem(item.id)} />
        </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
 },
 listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});
