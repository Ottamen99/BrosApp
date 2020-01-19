import React from 'react';
import {Text, View, Button, StatusBar, IconComponent} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'

import MatchList from '../components/Baby/MatchList'
import SquadList from '../components/Baby/Squads'

const TabNavigator = createBottomTabNavigator(
    {
        Home:  {
            screen: SquadList
        },
        MatchList: {
            screen: MatchList,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);
