import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Icon} from "react-native-elements";
import {Container, Header, Content, Card, CardItem, Body, Button} from 'native-base';
import {getData} from "../api/api";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertsData: [],
        }
    }

    static navigationOptions = {
        drawerLabel: 'Strona główna',
        drawerIcon: ({tintColor}) => (<Icon name={'home'} color={tintColor}/>),
    };

    componentDidMount() {
        getData().then(response => {
            this.setState({
                alertsData: response.data,
            })
        })
    }

    render() {
        return (
            <View>
                <DrawerIcon name={'Strona Główna'}/>
                <View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 5,
        minWidth: 50,
        justifyContent: 'center',
    }
});

