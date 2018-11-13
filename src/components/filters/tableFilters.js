import {StyleSheet, Text, View} from "react-native";
import React, {Component} from "react";
import {getData} from "../../api/api";
import {Container, Header, Content, Card, CardItem, Body, Button} from 'native-base';

export default class TableFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertsData: [],
            count: '',
        };
    }
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
        let count = 0, warning, ok, info, minor, major, critical;
        ok = this.state.alertsData.filter(item => item.AlertStatusId === 0).length;
        info = this.state.alertsData.filter(item => item.AlertStatusId === 1).length;
        warning = this.state.alertsData.filter(item => item.AlertStatusId === 2).length;
        minor = this.state.alertsData.filter(item => item.AlertStatusId === 3).length;
        major = this.state.alertsData.filter(item => item.AlertStatusId === 4).length;
        critical = this.state.alertsData.filter(item => item.AlertStatusId === 5).length;
        this.setState({ok, info, warning, minor, major, critical});
    }
    render() {
        return (
            <View>
                <Card>
                    <CardItem header>
                        <Text>ESIM - Event and Service Impact Manager</Text>
                    </CardItem>
                    <CardItem>
                        <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                        <Button success style={styles.btn}>
                            <Text>{this.state.ok}</Text>
                        </Button>
                        <Button info style={styles.btn}>
                            <Text>{this.state.info}</Text>
                        </Button>
                        <Button warning style={styles.btn}>
                            <Text>{this.state.warning}</Text>
                        </Button>
                        <Button warning style={styles.btn}>
                            <Text>{this.state.minor}</Text>
                        </Button>
                        <Button danger style={styles.btn}>
                            <Text>{this.state.major}</Text>
                        </Button>
                        <Button danger style={styles.btn}>
                            <Text>{this.state.critical}</Text>
                        </Button>
                        </Body>
                    </CardItem>
                </Card>
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
