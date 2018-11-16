import React, {Component} from 'react';
import {Icon} from "native-base";
import {
    View, Text
} from 'react-native';

export default class AlertsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Usługi IT',
        drawerIcon: ({tintColor}) => (<Icon name={'desktop'} color={tintColor}/>),
    };

    render() {
        return (
            <View>
                <Text>
                    Usługi IT
                </Text>
            </View>
        )
    }
}