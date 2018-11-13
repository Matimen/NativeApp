import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';
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
                <View>
                        <Card style={{flex: 0}}>
                            <CardItem>
                                    <Body>
                                    <Text>ESIM - Event and Service Impact Manager</Text>
                                    </Body>

                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>
                                    Your text here
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent textStyle={{color: '#87838B'}}>
                                        <Icon name="logo-github" />
                                        <Text>1,926 stars</Text>
                                    </Button>
                                </Left>
                            </CardItem>
                        </Card>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Body>
                            <Text>IMS - Icinga2 Monitoring Servers</Text>
                            </Body>

                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                Your text here
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Body>
                            <Text>STM - Synthetic Transaction Monitoring</Text>
                            </Body>

                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                Your text here
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github" />
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

});

