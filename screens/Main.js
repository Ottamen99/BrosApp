import { Button, View, Text, ImageBackground, TouchableHighlight, StatusBar, Image } from 'react-native';
import React from 'react';
import { FlatGrid } from 'react-native-super-grid';

export default class Main extends React.Component {
    static navigationOptions = {
        navigationOptions: {
            headerShown: false,
        }
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <ImageBackground source={require("../assets/img/bg.jpg")} style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableHighlight
                        style={{width: 150, height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}
                        onPress={() => this.props.navigation.navigate('Bowling')} >
                        <Image source={require("../assets/img/bowling.png")} style={{width: 70, height: 70}}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{width: 150, height: 150, backgroundColor: 'white', marginBottom: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}
                        onPress={() => this.props.navigation.navigate('Baby')} >
                        <Image source={require("../assets/img/baby.png")} style={{width: 130, height: 130}}/>
                    </TouchableHighlight>
                </ImageBackground>
            </View>
        );
    }
}
