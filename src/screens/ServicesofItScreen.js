import React, {Component} from 'react';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import {Icon, Card, ListItem} from "react-native-elements";
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import TableFilters from "../components/filters/tableFilters";

export default class ServicesofItScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Usługi IT',
        drawerIcon: ({tintColor}) => (<Icon name={'computer'} color={tintColor}/>),
    };

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
            widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200],

        };
    }

    render() {
        return (

            <View style={styles.container}>
                <DrawerIcon name={'Usługi IT'}/>
                <Text>Usługi IT</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff'},
    header: {height: 50, backgroundColor: '#537791'},
    text: {textAlign: 'center', fontWeight: '100'},
    dataWrapper: {marginTop: -1},
    filters: {paddingHorizontal: 10},
    row: {height: 40, backgroundColor: '#E7E6E1'}
});

