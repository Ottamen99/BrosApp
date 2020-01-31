import React from 'react';
import {Text, View, Button, FlatList, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import { ListView } from 'react-native-elements'

export default class Squads extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='star'
                  type='font-awesome'
                  color={tintColor}/>
        )
    };

    render() {
        return (
            <View></View>
        );
    }
}
