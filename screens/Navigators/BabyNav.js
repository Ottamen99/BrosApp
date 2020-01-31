import React from 'react';
import { createAppContainer } from 'react-navigation';

import SquadList from '../../components/Baby/Squads'
import StatsScreen from '../Stats'

import { createStackNavigator} from 'react-navigation-stack';

const StackNav =  createStackNavigator(
{
        Squad: {
          screen: SquadList,
        },
        Stats: {
            screen: StatsScreen
        }
    },
    {
        initialRouteName: 'Squad',
    }
);

export default createAppContainer(StackNav)
