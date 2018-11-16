import React, {Component} from 'react';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import {Icon, Card, ListItem} from "react-native-elements";
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import TableFilters from "../components/filters/tableFilters";

export default class StateofServicesScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Stany Usług IT',
        drawerIcon: ({tintColor}) => (<Icon name={'router'} color={tintColor}/>),
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={styles.container}>
                <DrawerIcon name={'Stany Usług IT'}/>
                <View style={styles.filters}>
                </View>
                <ScrollView horizontal={true}>
                    <Text>
                        Stany usług
                    </Text>
                </ScrollView>
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

