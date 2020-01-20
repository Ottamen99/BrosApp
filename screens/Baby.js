import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MatchList from '../components/Baby/MatchList'

import StackNav from "./BabyNav";

const TabNavigator = createBottomTabNavigator(
    {
        Home:  {
            screen: StackNav
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
