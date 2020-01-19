import React from 'react';
import {Text, View, Button, StatusBar, IconComponent} from 'react-native';
import { Icon } from 'react-native-elements'

export default class Squads extends React.Component {
    static navigationOptions = {
        headerShown: false,
        title: "Équipes",
        tabBarIcon: ({tintColor}) => (
            <Icon name='users'
                  type='font-awesome'
                  color={tintColor}/>
        )
    };

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignContent: "stretch"
                    }}>
                    <View style={{flex: 1, width: 150, height: 150, backgroundColor: 'skyblue', margin: 20, justifyContent: 'center', alignItems: "center"}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 1, width: 150, height: 150, backgroundColor: 'steelblue', margin: 20, justifyContent: 'center', alignItems: "center"}}>
                        <Text>2</Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignContent: "stretch"
                    }}>
                    <View style={{flex: 1, width: 150, height: 150, backgroundColor: 'skyblue', margin: 20, justifyContent: 'center', alignItems: "center"}}>
                        <Text>3</Text>
                    </View>
                    <View style={{flex: 1, width: 150, height: 150, backgroundColor: 'steelblue', margin: 20, justifyContent: 'center', alignItems: "center"}}>
                        <Text>4</Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignContent: "stretch"
                    }}>
                    <View style={{flex: 1, width: 150, height: 150, backgroundColor: 'skyblue', margin: 20, justifyContent: 'center', alignItems: "center"}}>
                        <Text>5</Text>
                    </View>
                    <View style={{flex: 1, width: 150, height: 150, backgroundColor: 'steelblue', margin: 20, justifyContent: 'center', alignItems: "center"}}>
                        <Text>6</Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignContent: "stretch"
                    }}>
                    <View style={{flex: 1, width: 150, height: 150, backgroundColor: 'skyblue', margin: 20, justifyContent: 'center', alignItems: "center"}}>
                        <Text>7</Text>
                    </View>
                    <View style={{flex: 1, width: 150, height: 150, backgroundColor: 'steelblue', margin: 20, justifyContent: 'center', alignItems: "center"}}>
                        <Text>8</Text>
                    </View>
                </View>
            </View>
        );
    }
}
