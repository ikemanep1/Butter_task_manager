import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import ListItem from '../components/ListItem';
import Header from '../shared/Header';

const screens = {
    Home: {
        screen: Page1,
        navigationOptions: {
            title: 'Welcome',
        }
  },
Page2: {
    screen: Page2,
    navigationOptions: {
        title: 'How to use'
    }
},
Page3: {
    screen: Page3,
    navigationOptions: {
        title: 'Feel free to organize'
    }
},
ListItem: {
    screen: ListItem,
    navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='Butter' navigation={navigation} />
        }
    }
}
}
const TutorialStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 }
    }
  });

  export default TutorialStack;