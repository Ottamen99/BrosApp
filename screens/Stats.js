import { Button, View, Text, ImageBackground, TouchableHighlight, StatusBar, Image ,StyleSheet } from 'react-native';
import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import {Icon, Card} from "react-native-elements";

export default class Main extends React.Component {
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
            <React.Fragment>
                <View style={{flex: 1, alignItems: 'center', marginTop: 50, zIndex: 1}}>
                    <Image source={require('../assets/img/bg.jpg')} style={style.profileImage}/>
                </View>
                <View style={style.card}>
                    <View style={{flex: 1, alignItems: 'center',}}>
                        <Text style={style.title}>Equipe 1</Text>
                    </View>
                </View>

            </React.Fragment>
        );
    }
}

const style = StyleSheet.create({
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    card: {
        flex: 7,
        backgroundColor: "white",
        marginLeft: 20,
        marginRight: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    title: {
        flex: 1,
        fontSize: 30,
        alignItems: 'center',
        marginTop: 100,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})
