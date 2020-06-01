import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';


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
  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
      data={items}
      renderItem={({item})  => <ListItem item={item} deleteItem={deleteItem}/>}
      />
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
