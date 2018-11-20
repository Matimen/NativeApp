import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView,
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Card, Icon} from "react-native-elements";
import {CardItem, Button, Left, Body} from 'native-base';
import {getData} from "../api/api";
import SwipeList from "../components/swipe-list/swipe-list";

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
        })
            .then(() => {
                this.createList();
            });
    }

    createList() {

    }

    render() {
        return (
            <View>
                <DrawerIcon name={'Strona Główna'}/>
                <ScrollView style={{paddingHorizontal: 5}}>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Body>
                                <Text>ESIM - Event and Service Impact Manager</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                            <Button success style={styles.btn} onPress={() =>
                                navigate('Profile', {name: 'Jane'})
                            }>
                                <Text>{this.state.alertsData.filter(item => item.AlertStatusId === 0).length}</Text>
                            </Button>
                            <Button info style={styles.btn}>
                                <Text>{this.state.alertsData.filter(item => item.AlertStatusId === 1).length}</Text>
                            </Button>
                            <Button warning style={styles.btn}>
                                <Text>{this.state.alertsData.filter(item => item.AlertStatusId === 2).length}</Text>
                            </Button>
                            <Button warning style={styles.btn}>
                                <Text>{this.state.alertsData.filter(item => item.AlertStatusId === 3).length}</Text>
                            </Button>
                            <Button danger style={styles.btn}>
                                <Text>{this.state.alertsData.filter(item => item.AlertStatusId === 4).length}</Text>
                            </Button>
                            <Button danger style={styles.btn}>
                                <Text>{this.state.alertsData.filter(item => item.AlertStatusId === 5).length}</Text>
                            </Button>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{color: 'grey'}}>Twojej uwagi wymaga {this.state.alertsData.filter(item => item.AlertStatusId).length} spraw</Text>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card title={'Lista aktywności'}>
                        <SwipeList/>
                    </Card>
                </ScrollView>
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

