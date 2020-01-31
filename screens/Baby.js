import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon, ListItem } from 'react-native-elements'

import MatchList from '../components/Baby/MatchList'
import Archivements from '../components/Baby/archivement'

import StackNav from "./Navigators/BabyNav";

const TabNavigator = createBottomTabNavigator(
    {
        Squads:  {
            screen: StackNav,
            navigationOptions: () => ({
                headerShown: false,
                title: 'Équipes',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='users'
                          type='font-awesome'
                          color={tintColor}/>
                )
              })
        },
        MatchList: {
            screen: MatchList,
        },
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
