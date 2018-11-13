import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Icon} from "react-native-elements";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body } from 'native-base';
import {getData} from "../api/api";

export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            alertsData: [],
            count: '',
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
        });
    }



    render() {
        return (
            <View>
                <DrawerIcon name={'Strona Główna'}/>
                <View style={{paddingHorizontal: 5}}>
                    <Card style={{flex: 0}}>
                        <CardItem>

                                <Body>
                                <Text>NativeBase</Text>
                                <Text note>April 15, 2016</Text>
                                </Body>
                           
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                //Your text here
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
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

