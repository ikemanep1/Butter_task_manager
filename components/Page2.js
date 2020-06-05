import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function Page2(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Page2.defaultProps = {
    title: 'Butter'
}


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