import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Icon} from "react-native-elements";
import {Container, Header, Content, Card, CardItem, Body, Button} from 'native-base';
import {getData} from "../api/api";


export default class HomeScreen extends Component {
    constructor() {
        super();
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
            .then(() => {
                this.createList();
            })
        ;
    }

    createList() {
        let count = 0, warning;
        warning = this.state.alertsData.filter(item => item.AlertStatusId === 1);
        count = warning.length;
    }

    render() {
        return (
            <View>
                <DrawerIcon name={'Strona Główna'}/>
                <View>
                    <Card>
                        <CardItem header>
                            <Text>ESIM - Event and Service Impact Manager</Text>
                        </CardItem>
                        <CardItem>
                            <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                            <Button success style={styles.btn}>
                                <Text>{this.state.count}</Text>
                            </Button>
                            <Button info style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            <Button warning style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            <Button warning style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            <Button danger style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            <Button danger style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            </Body>
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
    }
});

