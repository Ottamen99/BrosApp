import { Button, View, Text, ImageBackground, Dimensions, ScrollView, Image ,StyleSheet } from 'react-native';
import * as React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import {Icon, Card} from "react-native-elements";

export default class StatsBowlingSolo extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <React.Fragment>
                <ScrollView style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={style.imageContainer}>
                            <Image source={require('../../assets/img/bg.jpg')} style={style.profileImage}/>
                        </View>
                        <View style={style.card}>
                            <View style={{flex: 1,}}>
                                <View style={{width: '100%', borderBottomColor: 'lightgray', borderBottomWidth: 0.2}}>
                                    <Text style={style.title}>Ottavio</Text>
                                </View>
                                <View style={style.subtitle}>
                                    <Text style={style.subtitle}>Statistiques</Text>
                                </View>
                                <View style={style.statsContainer}>
                                    <Text style={style.stats}>Parties jouées :</Text>
                                    <Text style={style.statsNumbers}>10</Text>
                                </View>
                                <View style={style.statsContainer}>
                                    <Text style={style.stats}>Meilleur score :</Text>
                                    <Text style={style.statsNumbers}>199</Text>
                                </View>
                                <View style={style.statsContainer}>
                                    <Text style={style.stats}>Moyenne pts :</Text>
                                    <Text style={style.statsNumbers}>121</Text>
                                </View>
                                <View style={style.statsContainer}>
                                    <Text style={style.stats}>Boule préférée: </Text>
                                    <Text style={style.statsNumbers}>11</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
        marginTop: 125,
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
        fontSize: 36,
        alignItems: 'center',
        marginTop: 75,
        marginBottom: 10,
        textAlign: "center",
    },
    statsNumbers: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 15
    },
    stats: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 15
    },
    imageContainer: { 
        alignItems: 'center',
        zIndex: 1, 
        position: 'absolute', 
        left: '50%', 
        right: '50%', 
        marginTop: 50
    },
    statsContainer: {
        alignItems: 'flex-start',
        marginTop: 15,
        marginBottom: 15,
        flexDirection: "row"
    },
    subtitle: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        borderBottomColor: 'lightgray', 
        borderBottomWidth: 0.2
    }
})
