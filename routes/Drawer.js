import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import TutorialStack from './tutorialStack';
import AdditionStack from './additionStack';

const RootDrawerNavigator = createDrawerNavigator({
    Tutorial: {
      screen: TutorialStack,
    },
    Addition: {
      screen: AdditionStack,
    },
  });
  
  export default createAppContainer(RootDrawerNavigator);