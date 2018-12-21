import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Card, Divider} from "react-native-elements";
import {CardItem, Button, Left, Right, Body, Icon, Separator} from 'native-base';
import {getData} from "../api/api";
import SwipeList from "../components/swipe-list/swipe-list";
import { Dialog } from 'react-native-simple-dialogs';

export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            alertsData: [],
            count: '',
            dialogESIM: false,
            dialogMS: false
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

    openDialog = (show) => {
        this.setState({ dialogESIM: show });
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
                                <TouchableOpacity onPress={() => this.setState({dialogESIM: true})} style={{display: 'flex', flexDirection: 'row'}}>
                                    <Text style={{backgroundColor: '#777', marginRight: 10, padding: 3}}><Text style={{color: 'white'}}>ESIM-A</Text></Text>
                                    <Text style={{backgroundColor: '#4dad4a', padding: 3}}><Text style={{color: 'white'}}>AKTYWNY</Text></Text>
                                </TouchableOpacity>
                                <Dialog
                                    visible={this.state.dialogESIM}
                                    title="Wybór ESIM"
                                    onTouchOutside={() => this.setState({dialogESIM: false})}>
                                    <Divider style={{marginVertical: 20}}/>
                                    <TouchableOpacity onPress={() => this.setState({dialogESIM: false})} style={{display: 'flex', flexDirection: 'row'}}>
                                        <Text style={{backgroundColor: '#777', marginRight: 10, padding: 3}}><Text style={{color: 'white'}}>ESIM-A</Text></Text>
                                        <Text style={{backgroundColor: '#4dad4a', padding: 3}}><Text style={{color: 'white'}}>AKTYWNY</Text></Text>
                                    </TouchableOpacity>
                                    <Divider style={{marginVertical: 20}}/>
                                    <View style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                        <Text onPress={() => this.setState({dialogESIM: false})} style={{backgroundColor: '#fff', color: 'black', paddingHorizontal: 20, borderWidth: 0.7}}><Text>Zamknij</Text></Text>
                                    </View>
                                </Dialog>
                                </Body>
                                <Body style={{flexDirection: 'row', padding: 0, borderLeftWidth: 1, borderLeftColor: 'grey', }}>
                                    <TouchableOpacity onPress={() => this.setState({dialogMS: true})} style={{display: 'flex', flexDirection: 'row'}}>
                                        <Text style={{backgroundColor: '#777', marginLeft: 25, padding: 3}}><Text style={{color: 'white'}}>Min. Spr. EKW</Text></Text>
                                    </TouchableOpacity>
                                    <Dialog
                                        visible={this.state.dialogMS}
                                        title="Wybór klienta"
                                        onTouchOutside={() => this.setState({dialogMS: false})}>
                                        <Divider style={{marginVertical: 20}}/>
                                        <TouchableOpacity onPress={() => this.setState({dialogMS: false})} style={{display: 'flex', flexDirection: 'row'}}>
                                            <Text style={{backgroundColor: '#777', marginLeft: 25, padding: 3}}><Text style={{color: 'white'}}>Min. Spr. EKW</Text></Text>
                                        </TouchableOpacity>
                                        <Divider style={{marginVertical: 20}}/>
                                        <View style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                            <Text onPress={() => this.setState({dialogMS: false})} style={{backgroundColor: '#fff', color: 'black', paddingHorizontal: 20, borderWidth: 0.7}}><Text>Zamknij</Text></Text>
                                        </View>
                                    </Dialog>
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
                                        style={{color: '#BAB8B9', fontSize: 15}}>Alerty NOT CLOSED: <Text style={{color: '#73879C', fontSize: 24, fontWeight: 'bold'}}>{this.state.alertsData.filter(item => item.AlertStatusId).length}</Text></Text>
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
                                        style={{color: '#BAB8B9', fontSize: 15}}>Stany usług IT: <Text style={{color: '#73879C', fontSize: 24, fontWeight: 'bold'}}>{this.state.alertsData.filter(item => item.AlertStatusId).length}</Text></Text>
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
                                        style={{color: '#BAB8B9', fontSize: 15}}>Usługi IT: <Text style={{color: '#73879C', fontSize: 24, fontWeight: 'bold'}}>{this.state.alertsData.filter(item => item.AlertStatusId).length}</Text></Text>
                                </Left>
                                <Right>
                                    <Icon name={'desktop'} color={'#BAB8B8'}/>
                                </Right>
                            </CardItem>
                        </Card>
                    </Card>
                    <Card containerStyle={{marginBottom: 15}} titleStyle={{color: 'grey', fontSize: 14}} title={'Alerty NOT CLOSED'}>
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

