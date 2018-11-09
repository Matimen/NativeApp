import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Button
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Icon} from "react-native-elements";
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';


export default class HomeScreen extends Component {
     static navigationOptions = {
        drawerLabel: 'Strona Główna',
        drawerIcon: ({ tintColor }) => (<Icon name={'notifications'} color={tintColor}/>  ),
    };
    render(){
        return (
            <View>
                <DrawerIcon name={'Strona Główna'}/>
                <View>

                            <Card>
                                <CardItem header>
                                    <Text>NativeBase</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                    <Text>
                                        //Your text here
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <Text>GeekyAnts</Text>
                                </CardItem>
                            </Card>
                        
                </View>
            </View>
        )
    }
}

