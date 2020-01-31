import React from 'react';
import { createAppContainer } from 'react-navigation';

import SoloList from '../../components/Bowling/Solo'
import StatsSolo from '../../components/Bowling/StatsBowlingSolo'

import { createStackNavigator} from 'react-navigation-stack';

const StackNav =  createStackNavigator(
{
        Solo: {
          screen: SoloList,
        },
        SoloStats: {
            screen: StatsSolo
        }
    },
    {
        initialRouteName: 'Solo',
    }
);

export default createAppContainer(StackNav)
