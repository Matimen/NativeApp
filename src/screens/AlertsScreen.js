import React, { Component } from 'react';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {Icon} from "react-native-elements";
import {
    View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, ActivityIndicator
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import { getData } from "../api/api";
import Moment from 'moment';

export default class AlertsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Alerty',
        drawerIcon: ({ tintColor }) => (<Icon name={'notifications'} color={tintColor}/>  ),
    };
    constructor(props) {
        super(props);
        this.state = {
            alertsData: [],
            tableHead: ['ID', 'ApiKey', 'Nazwa Klienta', 'Źródło', 'Data od', 'Data do', 'Host', 'Klasa', 'Klasa obiektu'],
            widthArr: [50, 50, 80, 100, 100, 100, 100, 100, 100]
        }
    }
    componentDidMount() {
        getData().then( response => {
            this.setState({
                alertsData: response.data,
            });
        });
    }
    render() {
        return (
            <View>
                <DrawerIcon name={'Alerty'}/>
                <ScrollView horizontal={true}>
                    <View>
                        <Table borderStyle={{borderColor: '#a39f9e'}}>
                            <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text}/>
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                            {
                                this.state.alertsData.length > 1?
                                    <Table>
                                        {
                                            this.state.alertsData.map((rowData, index) => (
                                                <Row
                                                    key={index}
                                                    data={[rowData.AlertId, rowData.ClientApiKeyId, rowData.ClientName,
                                                        rowData.Source,
                                                        Moment(rowData.StartDate).format('YYYY-MM-DD'),
                                                        Moment(rowData.StopDate).format('YYYY-MM-DD'),
                                                        rowData.Host,
                                                        rowData.Class,
                                                        rowData.ObjectClass]}
                                                    widthArr={this.state.widthArr}
                                                    style={[styles.row, index%2 && {backgroundColor: '#e3eefe'}]}
                                                    textStyle={styles.text}
                                                />
                                            ))
                                        }
                                    </Table>:
                                    <ActivityIndicator style={{alignItems: 'flex-start', marginLeft: 185, marginBottom: 100, marginTop: 100}} size="large" color="#0000ff" />
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {backgroundColor: '#a5e1ff' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { backgroundColor: '#dbeafa'}
});

