import React from 'react';
import { createAppContainer } from 'react-navigation';

import SessionsList from '../../components/Bowling/SessionsList'
import PartiesList from '../../components/Bowling/PartiesList'
import PartieStats from '../../components/Bowling/PartieStats'

import { createStackNavigator} from 'react-navigation-stack';

const StackNav =  createStackNavigator(
{
        SessionsList: {
          screen: SessionsList,
        },
        PartiesList: {
            screen: PartiesList
        },
        PartieStats: {
            screen: PartieStats
        }
    },
    {
        initialRouteName: 'SessionsList',
    }
);

export default createAppContainer(StackNav)
