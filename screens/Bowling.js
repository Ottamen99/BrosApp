import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon, ListItem } from 'react-native-elements'

import Solo from '../components/Bowling/Solo'
import Duo from '../components/Bowling/Duo'
import PartiesStackNav from './Navigators/BowlingPartiesNav'

import StackNavSolo from "./Navigators/BowlingNavSolo";

const TabNavigator = createBottomTabNavigator(
    {
        Solo:  {
            screen: StackNavSolo,
            navigationOptions: () => ({
                headerShown: false,
                title: 'Solo',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='user'
                          type='font-awesome'
                          color={tintColor}/>
                )
              })
        },
        Duo: {
            screen: Duo,
        },
        Parties: {
            screen: PartiesStackNav,
            navigationOptions: () => ({
                headerShown: false,
                title: 'Parties',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='bowling'
                          type='material-community'
                          color={tintColor}/>
                )
              })
        }
        /*Archivements: {
            screen: Archivements,
        },*/
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);