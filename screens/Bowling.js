import { Button, View, Text } from 'react-native';
import React from 'react';

export default class Bowling extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Bowling Screen</Text>
                <Button title="Go to Main"
                        onPress={() => this.props.navigation.navigate('Main')}
                />
            </View>
        );
    }
}
