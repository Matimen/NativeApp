import React, {Component} from 'react';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {Card, Divider, Icon} from "react-native-elements";
import {
    View, StyleSheet, ScrollView, ActivityIndicator, Text
} from 'react-native';
import Moment from 'moment';
import _ from 'lodash';
import DrawerIcon from '../components/menu-icon/menu-icon';
import TableFilters from "../components/filters/tableFilters";
import {getData} from "../api/api";

export default class AlertsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Alerty',
        drawerIcon: ({tintColor}) => (<Icon name={'notifications'} color={tintColor}/>),
    };

    constructor(props) {
        super(props);
        this.state = {
            alertsData: [],
            tableHead: [<Text style={styles.text}
                              onPress={() => this.sortbyID('AlertId')}>ID</Text>, 'ApiKey', 'Nazwa Klienta', 'Data od', 'Data do'],
            widthArr: [50, 30, 130, 100, 100],
            sorted: ''
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
        // LODASH
        if (this.state.sorted !== 'desc') {
            this.setState({
                alertsData: _.orderBy(this.state.alertsData, column, 'desc'),
                sorted: 'desc'
            })
        } else {
            this.setState({
                alertsData: _.orderBy(this.state.alertsData, column, 'asc'),
                sorted: 'asc'
            })
        }
    }

    render() {
        return (

            <View>
                <DrawerIcon name={'Strona Główna'}/>
                <Card>
                    <TableFilters alerts={this.state.alertsData}/>
                </Card>
                <Divider style={{ backgroundColor: 'grey', margin: 5 }} />
                <View>
                    <Table style={{borderColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}
                             widthArr={this.state.widthArr}/>
                        {this.state.alertsData.length > 0 ?

                            this.state.alertsData.map((rowData, index) => (
                                <TableWrapper key={index}
                                              style={[styles.row, index % 2 && {backgroundColor: '#e3eefe'}]}>
                                    <Cell data={rowData.AlertId} textStyle={styles.text}
                                          width={this.state.widthArr[0]}/>
                                    <Cell data={rowData.ClientApiKeyId} textStyle={styles.text}
                                          width={this.state.widthArr[1]}/>
                                    <Cell data={rowData.ClientName} textStyle={styles.text}
                                          width={this.state.widthArr[2]}/>
                                    <Cell data={Moment(rowData.StartDate).format('DD.MM.YYYY')}
                                          textStyle={styles.text} width={this.state.widthArr[3]}/>
                                    <Cell data={Moment(rowData.StopDate).format('DD.MM.YYYY')}
                                          textStyle={styles.text} width={this.state.widthArr[4]}/>
                                </TableWrapper>
                            ))
                            :
                            <ActivityIndicator style={{alignItems: 'flex-start', marginBottom: 50, marginTop: 50}}
                                               size="large" color="#0000ff"/>
                        }
                    </Table>
                </View>
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
