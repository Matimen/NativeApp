import React, {Component} from 'react';
import {ListView} from 'react-native';
import {Button, Icon, List, ListItem, Text} from 'native-base';

export default class SwipeList extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listViewData: [],
        };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                listViewData: ['"AlertId":1711, "ClientApiKeyId":2, "ClientName":" Rossmann SDP. Sp. z o.o."']
            });
        },500);
        setTimeout(()=>{
            this.setState(prevState => ({
                listViewData: [...prevState.listViewData, '"AlertId":195, "ClientApiKeyId":14, "ClientName":" Mati-Pol SDP. Sp. z o.o."']
            }))
        },3000);
        setTimeout(()=>{
            this.setState(prevState => ({
                listViewData: [...prevState.listViewData, '"AlertId":13, "ClientApiKeyId":1, "ClientName":" MatiTrans SDP. Sp. z o.o."']
            }))
        },7000);
        setTimeout(()=>{
            this.setState(prevState => ({
                listViewData: [...prevState.listViewData, '"AlertId":10, "ClientApiKeyId":1195, "ClientName":" ŁukPol Sp. z o.o."']
            }))
        },10000);
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
                this.state.listViewData.length !== 0?
                <List
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow={data =>
                        <ListItem>
                            <Icon name={'alert'} style={{color: 'rgb(206,60,62)', marginRight: 7}}/>
                            <Text>{data}</Text>
                        </ListItem>}
                    renderLeftHiddenRow={data =>
                        <Button full style={{backgroundColor: 'rgb(77, 173, 74)'}} onPress={() => alert(data)}>
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