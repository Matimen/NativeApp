import React, {Component} from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import {Icon} from "react-native-elements";
import DrawerIcon from '../components/menu-icon/menu-icon';


export default class UserScreen extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };
    render(){
        return (
            <View>
                <DrawerIcon name={'Panel użytkownika'}/>
                <View style={{alignItems: 'center'}}>
                    <Text>Panel użytkownika</Text>
                </View>
            </View>
        )
    }

}