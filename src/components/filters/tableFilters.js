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
        let filteredData = this.props.alertsData.filter((item)=>{
            return item['AlertStatusId'] === type
        });
        this.props.filter(filteredData);
    }

    render() {
        return (
            <View>
                <Card containerStyle={{padding: 0}}>
                    <CardItem>
                        <Text>ESIM - Event and Service Impact Manager</Text>
                        <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                        <Button success style={styles.btn} onPress={() => this.filter(0)}>
                            <Text >
                                {this.props.alertsData.filter(item => item.AlertStatusId === 0).length}
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
