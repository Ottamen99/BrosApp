import React from 'react';
import { createAppContainer } from 'react-navigation';

import SquadList from '../components/Baby/Squads'
import StatsScreen from './Stats'

import { createStackNavigator} from 'react-navigation-stack';

const StackNav =  createStackNavigator(
{
        Squads: {
          screen: SquadList
        },
        Stats: {
            screen: StatsScreen
        }
    },
    {
        initialRouteName: 'Squads',
    }
);

export default createAppContainer(StackNav)
