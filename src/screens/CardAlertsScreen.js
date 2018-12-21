import React, {Component} from 'react';
import {Icon} from "native-base";
import {
    View, StyleSheet, ScrollView, ActivityIndicator, Text,  Dimensions
} from 'react-native';

import _ from 'lodash';
import DrawerIcon from '../components/menu-icon/menu-icon';
import TableFilters from "../components/filters/tableFilters";
import {getData} from "../api/api";
import {AlertsCard} from "../components/alerts-cards/alerts-card";

const {height} = Dimensions.get('window');

export default class CardAlertsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Alerty',
        drawerIcon: ({tintColor}) => (<Icon name={'notifications'} color={tintColor}/>),
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            screenHeight: 0,
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
                loading: false
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
        this.setState({
            loading: true
        });
        setTimeout(()=>{
            this.setState({
                loading: false,
                filteredData: data
            })
        },1000);
    }
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({
            screenHeight: contentHeight
        })
    }
    render() {
        const scrollEnabled = this.state.screenHeight > height;
        return (
            <ScrollView
                style={{paddingBottom: 10}}
                onContentSizeChange={this.onContentSizeChange}
                scrollEnabled={scrollEnabled}>
                <DrawerIcon name={'Alerty'}/>
                <View>

                    <TableFilters alertsData={this.state.alertsData} filter={this.filterData.bind(this)}/>
                </View>
                <View>
                    <View>
                    {
                        !this.state.loading ?
                        (
                            this.state.filteredData.length > 0 ?
                                this.state.filteredData.map((rowData, index) => <AlertsCard key={index} rowData={rowData} index={rowData.AlertId}/>)
                                :
                                this.state.alertsData.map((rowData, index) => <AlertsCard key={index} rowData={rowData} index={rowData.AlertId}/>)
                        )
                        : <ActivityIndicator style={{alignItems: 'center', marginBottom: 50, marginTop: 50}} size="large" color="#0000ff"/>
                    }
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    head: {height: 40, backgroundColor: '#808B97'},
    text: {margin: 2, textAlign: 'center'},
    row: {flexDirection: 'row', backgroundColor: '#E7E6E1'},
});
