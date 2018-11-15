import {StyleSheet, Text, View} from "react-native";
import React, {Component} from "react";
import _ from 'lodash';
import {getData} from "../../api/api";
import {Container, Header, Content, Card, CardItem, Body, Button, Icon} from 'native-base';

export default class TableFilters extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };

    constructor(props) {
        super(props);
    }

    filter(type) {
        let filteredData = this.props.alertsData.filter((item)=>{
            return item['AlertStatusId'] === type
        });
        this.props.filter(filteredData);
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
                        <Button success style={styles.btn} onPress={() => this.filter(0)}>
                            <Text >
                                {this.props.alertsData.filter(item => item.AlertStatusId === 0).length}
                            </Text>
                        </Button>
                        <Button info style={styles.btn} onPress={() => this.filter(1)}>
                            <Text >
                                {this.props.alertsData.filter(item => item.AlertStatusId === 1).length}
                            </Text>
                        </Button>
                        <Button warning style={styles.btn} onPress={() => this.filter(2)}>
                            <Text>{this.props.alertsData.filter(item => item.AlertStatusId === 2).length}</Text>
                        </Button>
                        <Button warning style={styles.btn} onPress={() => this.filter(3)}>
                            <Text>{this.props.alertsData.filter(item => item.AlertStatusId === 3).length}</Text>
                        </Button>
                        <Button danger style={styles.btn} onPress={() => this.filter(4)}>
                            <Text>{this.props.alertsData.filter(item => item.AlertStatusId === 4).length}</Text>
                        </Button>
                        <Button danger style={styles.btn} onPress={() => this.filter(5)}>
                            <Text>{this.props.alertsData.filter(item => item.AlertStatusId === 5).length}</Text>
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
