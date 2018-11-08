import React, {Component} from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import {Icon} from "react-native-elements";
import DrawerIcon from '../components/menu-icon/menu-icon';


export default class ServicesScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Usługi',
        drawerIcon: ({ tintColor }) => <Icon name={'build'} color={tintColor}/>
    };
    render(){
        return (
            <View>
                <DrawerIcon name={'Serwisy'}/>
                <View style={{alignItems: 'center'}}>
                    <Text>Usługi</Text>
                </View>
            </View>
        )
    }

}