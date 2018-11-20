import React, {Component} from 'react';
import {DeckSwiper,  CardItem, Icon} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Card} from "react-native-elements";
import {getData} from "../api/api";

export default class StateofServicesScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Stany Usług IT',
        drawerIcon: ({tintColor}) => (<Icon name={'paper'} color={tintColor}/>),
    };

    constructor(props) {
        super(props);
        this.state = {
            alertsData: [],
            item: [],
        }
    }

    componentDidMount() {
        getData().then(response => {
            this.setState({
                alertsData: response.data,
            });
        })
            .then()
    }

    render() {
        if (!this.state.alertsData.length)
            return null;
        return (

            <View style={styles.container}>
                <DrawerIcon name={'Stany Usług IT'}/>
                <View>
                    <Card style={{justifyContent: 'center', alignItems: 'center', marginBottom: 14}}>
                        <Text style={{color: 'grey'}}>Przesuń w lewo lub prawo, aby zmienić kartę. </Text>
                    </Card>
                </View>
                <View>
                        <DeckSwiper
                            dataSource={this.state.alertsData}
                            renderItem={(item) =>
                                <Card style={{height: 300,}}>
                                    <CardItem header bordered
                                              style={item.AlertStatusId === 1 ? styles.danger : styles.green}>
                                        <Text style={item.AlertStatusId === 1 ? styles.danger : styles.green}>
                                            {item.ClientName}
                                        </Text>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Text>Status: {item.AlertStatusId}</Text>
                                    </CardItem>
                                    <CardItem>

                                        <Text>Treść: {"\n"}{item.Msg}</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Text> </Text>
                                    </CardItem>
                                </Card>
                            }
                        />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, height: 400, backgroundColor: '#fff'},
    header: {height: 50, backgroundColor: '#537791'},
    text: {textAlign: 'center', fontWeight: '100'},
    dataWrapper: {marginTop: -1},
    filters: {paddingHorizontal: 10},
    row: {height: 40, backgroundColor: '#E7E6E1'},
    danger: {backgroundColor: 'rgb(206,60,62)', color: '#fff'},
    green: {backgroundColor: 'rgb(77, 173, 74)'}
});

