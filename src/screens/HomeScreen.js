import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Button
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Icon} from "react-native-elements";

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Alerty',
        drawerIcon: ({ tintColor }) => (<Icon name={'notifications'} color={tintColor}/>  ),
    };
    render(){
        return (
            <View>
                <DrawerIcon/>
                <View style={{alignItems: 'center'}}>
                    <Text>Alerty</Text>
                </View>
            </View>
        )
    }
}

