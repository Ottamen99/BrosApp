import React from 'react';
import {Text, View, Button, FlatList, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import { ListView } from 'react-native-elements'

export default class Squads extends React.Component {
    static navigationOptions = {
        headerShown: false,
        tabBarIcon: ({tintColor}) => (
            <Icon name='users'
                  type='font-awesome'
                  color={tintColor}/>
        )
    };

    render() {
        return (
            <FlatList
            style={{
                flex: 1,
                flexDirection: 'column'
            }}
            contentContainerStyle={{
                justifyContent: 'center'
            }}

          data={[
            {key: 'Team1'},
            {key: 'Team2'}
          ]}
          numColumns={2}
          renderItem={({item}) => <View
          style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: "stretch",
              width: 75,
              justifyContent: "center"
          }}>
          <TouchableHighlight
              style={{ width: 150, height: 150, backgroundColor: 'skyblue', margin: 10, justifyContent: 'center', alignItems: "center", borderRadius: 75}}
              onPress={() => {this.props.navigation.navigate('Stats')}}>
              <Text>{item.key}</Text>
          </TouchableHighlight>
            </View>
      }
        />
        );
    }
}
