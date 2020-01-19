import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import MainScreen from './screens/Main'
import BabyScreen from './screens/Baby'
import BowlingScreen from './screens/Bowling'

const StackNav = createStackNavigator(
    {
        Bowling: BowlingScreen,
        Baby: BabyScreen,
        Main: {
            screen: MainScreen,
            navigationOptions: {
                headerShown: false,
                title: "Activité"
            },
        },
    },
    {
      initialRouteName: 'Main',
    }
);

const StackNavContainer = createAppContainer(StackNav);

export default class App extends React.Component {
  render() {
    return (
        <StackNavContainer />
    );
  }
}
