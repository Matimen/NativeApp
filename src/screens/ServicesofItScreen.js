import React, {Component} from 'react';
import {Body, Button, Icon} from "native-base";
import {
    View, Text, StyleSheet
} from 'react-native';
import DrawerIcon from "../components/menu-icon/menu-icon";
import {Card, Divider, FormInput, FormLabel} from "react-native-elements";
import {MocksButtons} from "../components/mocks-buttons/mocks-buttons";

export default class AlertsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Usługi IT',
        drawerIcon: ({tintColor}) => (<Icon name={'desktop'} color={tintColor}/>),
    };

    render() {
        return (
            <View>
                <DrawerIcon name={'Usługi IT'}/>
                <View>
                    <Card title={'Komponent modeli Usług IT'}>
                        <MocksButtons></MocksButtons>
                    </Card>
                </View>
                <Divider style={{backgroundColor: '#0072c6', margin: 15, marginBottom: 0}}/>
                <View>

                    <Card title={'System EKW - Odczucia użytkowników'}>
                        <MocksButtons></MocksButtons>
                    </Card>
                    <Card title={'System EKW - Architektura'}>
                        <MocksButtons></MocksButtons>
                    </Card>
                    <Card title={'System EKW - Aplikacje'}>
                        <MocksButtons></MocksButtons>
                    </Card>

                </View>
            </View>
        )
    }
}

