import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView,
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Card, Divider} from "react-native-elements";
import {CardItem, Button, Left, Right, Body, Icon, Separator} from 'native-base';
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
                <DrawerIcon name={'Ekran główny'}/>
                <ScrollView style={{marginBottom: 61}}>
                    <Card titleStyle={{color: '#73879C', fontSize: 14}} title={'Przetwarzanie zdarzeń i określanie ich wpływu na Usługi IT'}>
                        <Card containerStyle={{margin: 0, padding: 0, marginBottom: 10}}>
                            <CardItem>
                                <Body style={{flexDirection: 'row', padding: 0 }}>
                                    <Button style={{backgroundColor: '#777', marginRight: 10, padding: 5, height: 20}}><Text style={{color: 'white'}}>ESIM-A</Text></Button>
                                    <Button success style={{height: 20, padding: 5}}><Text style={{color: 'white'}}>Aktywny</Text></Button>
                                </Body>
                                <Body style={{flexDirection: 'row', padding: 0, borderLeftWidth: 1, borderLeftColor: 'grey', }}>
                                    <Button style={{backgroundColor: '#777', padding: 5, height: 20, marginLeft:30}}><Text style={{color: 'white'}}>Min. Spr. EKW</Text></Button>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card containerStyle={{margin: 0, padding: 0, marginBottom: 10}}>
                            <CardItem>
                                <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                                    <Button success style={styles.btn} onPress={() =>
                                        navigate('Profile', {name: 'Jane'})
                                    }>
                                        <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 0).length}</Text>
                                    </Button>
                                    <Button info style={styles.btn}>
                                        <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 1).length}</Text>
                                    </Button>
                                    <Button warning style={styles.btn}>
                                        <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 2).length}</Text>
                                    </Button>
                                    <Button warning style={styles.btn}>
                                        <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 3).length}</Text>
                                    </Button>
                                    <Button danger style={styles.btn}>
                                        <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 4).length}</Text>
                                    </Button>
                                    <Button danger style={styles.btn}>
                                        <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 5).length}</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text
                                        style={{color: '#BAB8B9', fontSize: 16}}>Alerty: <Text style={{color: '#73879C', fontSize: 24, fontWeight: 'bold'}}>{this.state.alertsData.filter(item => item.AlertStatusId).length}</Text></Text>
                                </Left>
                                <Right>
                                    <Icon name={'notifications'} color={'#BAB8B8'}/>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card containerStyle={{margin: 0, padding: 0, marginBottom: 10}}>
                            <CardItem>
                                <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                                <Button success style={styles.btn} onPress={() =>
                                    navigate('Profile', {name: 'Jane'})
                                }>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 0).length}</Text>
                                </Button>
                                <Button info style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 1).length}</Text>
                                </Button>
                                <Button warning style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 2).length}</Text>
                                </Button>
                                <Button warning style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 3).length}</Text>
                                </Button>
                                <Button danger style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 4).length}</Text>
                                </Button>
                                <Button danger style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 5).length}</Text>
                                </Button>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text
                                        style={{color: '#BAB8B9', fontSize: 16}}>Stany usług IT: <Text style={{color: '#73879C', fontSize: 24, fontWeight: 'bold'}}>{this.state.alertsData.filter(item => item.AlertStatusId).length}</Text></Text>
                                </Left>
                                <Right>
                                    <Icon name={'paper'} color={'#BAB8B8'}/>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card containerStyle={{margin: 0, padding: 0, marginBottom: 10}}>
                            <CardItem>
                                <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                                <Button success style={styles.btn} onPress={() =>
                                    navigate('Profile', {name: 'Jane'})
                                }>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 0).length}</Text>
                                </Button>
                                <Button info style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 1).length}</Text>
                                </Button>
                                <Button warning style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 2).length}</Text>
                                </Button>
                                <Button warning style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 3).length}</Text>
                                </Button>
                                <Button danger style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 4).length}</Text>
                                </Button>
                                <Button danger style={styles.btn}>
                                    <Text style={{color: 'white', fontSize: 20, paddingLeft: 10}}>{this.state.alertsData.filter(item => item.AlertStatusId === 5).length}</Text>
                                </Button>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text
                                        style={{color: '#BAB8B9', fontSize: 16}}>Usługi IT: <Text style={{color: '#73879C', fontSize: 24, fontWeight: 'bold'}}>{this.state.alertsData.filter(item => item.AlertStatusId).length}</Text></Text>
                                </Left>
                                <Right>
                                    <Icon name={'desktop'} color={'#BAB8B8'}/>
                                </Right>
                            </CardItem>
                        </Card>
                    </Card>
                    <Card containerStyle={{marginBottom: 15}} titleStyle={{color: 'grey', fontSize: 14}} title={'Lista aktywności'}>
                        <SwipeList/>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        paddingRight: 10,
        minWidth: 40,
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16
    }
});

