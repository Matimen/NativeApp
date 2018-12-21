import {StyleSheet, Text, View} from "react-native";
import React, {Component} from "react";

import {CardItem, Body, Button, Icon} from 'native-base';
import {Card} from "react-native-elements";

export default class TableFilters extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };

    constructor(props) {
        super(props);
    }

    filter(type) {
        let filteredData = this.props.alertsData.filter((item) => {
            return item['AlertStatusId'] === type
        });
        this.props.filter(filteredData);
    }

    render() {
        return (
            <View>
                <Card containerStyle={{padding: 0}}>
                    <CardItem>
                        <View style={{width: '100%'}}>
                            <View style={{alignItems: 'center', marginBottom: 10}}>
                                <Text style={{fontSize: 15}}>ESIM - Event and Service Impact Manager</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                                <Button success style={styles.btn} onPress={() => this.filter(0)}>
                                    <Text style={styles.text}>
                                        {this.props.alertsData.filter(item => item.AlertStatusId === 0).length}
                                    </Text>
                                </Button>
                                <Button style={{backgroundColor: '#529ff3',paddingHorizontal: 5, minWidth: 50, justifyContent: 'center',}} onPress={() => this.filter(1)}>
                                    <Text style={styles.text}>
                                        {this.props.alertsData.filter(item => item.AlertStatusId === 1).length}
                                    </Text>
                                </Button>
                                <Button warning style={styles.btn} onPress={() => this.filter(2)}>
                                    <Text style={styles.text}>{this.props.alertsData.filter(item => item.AlertStatusId === 2).length}</Text>
                                </Button>
                                <Button warning style={styles.btn} onPress={() => this.filter(3)}>
                                    <Text style={styles.text}>{this.props.alertsData.filter(item => item.AlertStatusId === 3).length}</Text>
                                </Button>
                                <Button danger style={styles.btn} onPress={() => this.filter(4)}>
                                    <Text style={styles.text}>{this.props.alertsData.filter(item => item.AlertStatusId === 4).length}</Text>
                                </Button>
                                <Button danger style={styles.btn} onPress={() => this.filter(5)}>
                                    <Text style={styles.text}>{this.props.alertsData.filter(item => item.AlertStatusId === 5).length}</Text>
                                </Button>
                            </View>
                        </View>
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
    },
    text: {
        color: 'white',
        fontSize: 16
    }
});
