import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/Home';
import Plant from '../views/Plant/Plant';
import PlantOptions from '../views/Plant/PlantOptions';
import DetailedPlant from '../views/Plant/DetailedPlant';
import Materials from '../views/Plant/Materials';

import Colors from '../constants/Colors';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'EdificAR',
        headerStyle: {
          backgroundColor: Colors.tertiary
        },
        headerTintColor: Colors.white
      }),
    },
    Plant: {
      screen: Plant,
      navigationOptions: () => ({
        title: 'Bloco 5 - ICMC',
        headerStyle: {
          backgroundColor: Colors.tertiary
        },
        headerTintColor: Colors.white
      }),
    },
    PlantOptions: {
      screen: PlantOptions,
      navigationOptions: () => ({
        title: 'Bloco 5 - ICMC',
        headerStyle: {
          backgroundColor: Colors.tertiary
        },
        headerTintColor: Colors.white
      }),
    },
    DetailedPlant: {
      screen: DetailedPlant,
      navigationOptions: () => ({
        title: 'Bloco 5 - ICMC',
        headerStyle: {
          backgroundColor: Colors.tertiary
        },
        headerTintColor: Colors.white
      }),
    },
    Materials: {
      screen: Materials,
      navigationOptions: () => ({
        title: 'Bloco 5 - ICMC',
        headerStyle: {
          backgroundColor: Colors.tertiary
        },
        headerTintColor: Colors.white
      }),
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(MainNavigator);
