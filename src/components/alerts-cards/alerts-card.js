import React, {Component} from 'react';
import {Card} from "react-native-elements";
import {Text, StyleSheet} from "react-native";
import Moment from "moment";

export class AlertsCard extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Card
                key={this.props.index}
                title={this.props.rowData.ClientName + ' ' + 'ID: ' + this.props.rowData.AlertId}>
                <Text style={styles.card}>
                    ID: {this.props.rowData.AlertId}
                </Text>
                <Text style={styles.card}>
                    Nazwa klienta: {this.props.rowData.ClientName}
                </Text>
                <Text style={styles.card}>
                    Źródło: {this.props.rowData.Source}
                </Text>
                <Text style={styles.card}>
                    Data od: {Moment(this.props.rowData.StartDate).format('DD.MM.YYYY')}
                </Text>
                <Text style={styles.card}>
                    Data do: {Moment(this.props.rowData.StopDate).format('DD.MM.YYYY')}
                </Text>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    card: {
        marginBottom: 5
    }
});
