import React, {Component} from 'react';
import {ListView, View} from 'react-native';
import {Button, Icon, List, ListItem, Text} from 'native-base';
import {Divider} from "react-native-elements";

export default class SwipeList extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listViewData: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                listViewData: [{
                    "AlertId": 1711,
                    "ClientApiKeyId": 2,
                    "ClientName": " Rossmann SDP. Sp. z o.o.",
                    "AlertStatusId": 0,
                }]
            });
        }, 500);
        setTimeout(() => {
            this.setState(prevState => ({
                listViewData: [...prevState.listViewData, {
                    "AlertId": 195,
                    "AlertStatusId": 0,
                    "ClientApiKeyId": 14,
                    "ClientName": " Mati-Pol SDP. Sp. z o.o."
                }]
            }))
        }, 3000);
        setTimeout(() => {
            this.setState(prevState => ({
                listViewData: [...prevState.listViewData, {
                    "AlertId": 13,
                    "ClientApiKeyId": 1,
                    "AlertStatusId": 2,
                    "ClientName": " MatiTrans SDP. Sp. z o.o."
                }]
            }))
        }, 7000);
        setTimeout(() => {
            this.setState(prevState => ({
                listViewData: [...prevState.listViewData, {
                    "AlertId": 10,
                    "ClientApiKeyId": 1195,
                    "AlertStatusId": 1,
                    "ClientName": " ŁukPol Sp. z o.o."
                }]
            }))
        }, 10000);
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({listViewData: newData});
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            this.state.listViewData.length !== 0 ?
                <List
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow={data =>
                        <View style={{padding: 5, display: 'flex', flexDirection: 'row'}}>
                            <Icon name={'alert'}
                                  style={{color: 'rgb(206,60,62)', marginRight: 12, marginVertical: 30}}/>
                            <View style={{width: '100%'}}>
                                <Text style={{
                                    backgroundColor: alertsColor[data.AlertStatusId].color,
                                    width: '100%'
                                }}>Status ID : {data.AlertStatusId}</Text>
                                <Text>Alert ID : {data.AlertId}</Text>
                                <Text>Klient API : {data.ClientApiKeyId}</Text>
                                <Text>Klient : {data.ClientName}</Text>
                            </View>
                        </View>}
                    renderLeftHiddenRow={data =>
                        <Button full style={{backgroundColor: 'rgb(77, 173, 74)'}} onPress={() => alert('Czy na pewno chcesz podjąć zadanie: ' + data.AlertId)}>
                            <Icon active name="information-circle"/>
                        </Button>}
                    renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                        <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                            <Icon active name="trash"/>
                        </Button>}
                />
                :
                <Text style={{marginLeft: '25%'}}>Brak nowych aktywności</Text>
        );
    }
}
export const alertsColor = {

    0: {
        color: '#4dad4a'
    },

    1: {
        color: '#529ff3'
    },

    2: {
        color: '#fbbf43'
    },

    3: {
        color: '#eb9e3e'
    },

    4: {
        color: '#e05254'
    },

    5: {
        color: '#ce3c3e'
    },
};
