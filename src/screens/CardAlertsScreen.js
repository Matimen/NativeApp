import React, {Component} from 'react';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {Icon, Container, Content} from "native-base";
import {
    View, StyleSheet, ScrollView, ActivityIndicator, Text
} from 'react-native';
import Moment from 'moment';
import _ from 'lodash';
import DrawerIcon from '../components/menu-icon/menu-icon';
import TableFilters from "../components/filters/tableFilters";
import {getData} from "../api/api";
import {Card} from "react-native-elements";

export default class CardAlertsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Alerty',
        drawerIcon: ({tintColor}) => (<Icon name={'notifications'} color={tintColor}/>),
    };

    constructor(props) {
        super(props);
        this.state = {
            idSorted: 'desc',
            alertsData: [],
            filteredData: [],
            tableHead: [
                <View><Text style={styles.text} onPress={() => this.sortbyID('AlertId')}>ID</Text></View>,
                'ApiKey',
                'Nazwa Klienta',
                'Data od',
                'Data do'],
            widthArr: [50, 30, 130, 100, 100]
        }
    }

    componentDidMount() {
        getData().then(response => {
            this.setState({
                alertsData: response.data,
            });
        });
    }

    sortbyID(column) {
        if (this.state.idSorted === 'desc') {
            this.setState({
                alertsData: _.orderBy(this.state.alertsData, column, 'asc'),
                idSorted: 'asc'
            })
        } else {
            this.setState({
                alertsData: _.orderBy(this.state.alertsData, column, 'desc'),
                idSorted: 'desc'
            })
        }
    }

    filterData(data) {
        console.log(data);
        this.setState({
            filteredData: data
        })
    }

    render() {
        return (
            <View>
                <DrawerIcon name={'Alerty'}/>
                <View>
                    <TableFilters alertsData={this.state.alertsData} filter={this.filterData.bind(this)}/>
                </View>
                    {this.state.filteredData.length === 0 ?
                        (
                            this.state.alertsData.length > 0 ?
                                this.state.alertsData.map((rowData, index) => (
                                    <Card
                                        key={index}
                                        title={rowData.ClientName + ' ' + 'ID: ' + rowData.AlertId}>
                                        <Text style={{marginBottom: 10}}>
                                            {rowData.AlertId}
                                        </Text>
                                    </Card>
                                )) :
                                <ActivityIndicator style={{alignItems: 'center', marginBottom: 50, marginTop: 50}}
                                                   size="large" color="#0000ff"/>
                        )
                        :
                        (
                            this.state.filteredData.map((rowData, index) => (
                                <Card
                                    key={index}
                                    title='HELLO WORLD'>
                                    <Text style={{marginBottom: 10}}>
                                        {rowData.AlertId}
                                    </Text>
                                </Card>
                            ))
                        )
                    }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 5, paddingTop: 30, backgroundColor: '#fff'},
    head: {height: 40, backgroundColor: '#808B97'},
    text: {margin: 2, textAlign: 'center'},
    row: {flexDirection: 'row', backgroundColor: '#E7E6E1'},
});
