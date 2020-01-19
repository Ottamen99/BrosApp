import React from 'react';
import {Text, View, FlatList} from "react-native";
import {Icon, List, ListItem} from 'react-native-elements'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

export default class MatchList extends React.Component {

    static navigationOptions = {
        title: "Parties",
        tabBarIcon: ({tintColor}) => (
            <Icon name='gamepad'
                  type='font-awesome'
                  color={tintColor} />
        )
    };

    FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View
                style={{ height: 0.3, width: '100%', backgroundColor: '#C8C8C8' }}
            />
        );
    };

    render() {
        return (
            <FlatList
                data={DATA}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({ item }) => (
                    <ListItem
                        title={"Partie du 20.01.2020"}
                        subtitle={"10-8"}
                        leftAvatar={{source : {uri: "https://picsum.photos/200"}}}
                    />
                )}
            />
        );
    }
}
