import React, {useState} from 'react';
import {StyleSheet,} from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './routes/Drawer';


export default function App() {

  return (
   <Navigator />
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
