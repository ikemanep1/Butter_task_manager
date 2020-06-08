import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import ListDream from '../components/ListDream';
import ListHope from '../components/ListHope';
import ListItem from '../components/ListItem';
import Header from '../shared/Header';

const screens = {
ListItem: {
    screen: ListItem,
    navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='Butter' navigation={navigation} />
        }
    }
},
ListHope: {
    screen: ListHope,
    navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='Butter' navigation={navigation} />
        }
    }
},
ListDream: {
    screen: ListDream,
    navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='Butter' navigation={navigation} />
        }
    }
},
}
const AdditionStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 }
    }
  });

  export default AdditionStack;