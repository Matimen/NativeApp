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
                        <Text style={{
                            color: 'grey',
                            fontSize: 12,
                            marginBottom: 8,
                            marginLeft: 50
                        }}>Filtruj wszystkie dane poprzez rodzaj alertu.</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Button success style={styles.btn} onPress={() => this.props.navigation.navigate('Usługi IT - drzewko')}>
                                <Text>OK</Text>
                            </Button>
                            <Button info style={styles.btn} onPress={() => this.props.navigation.navigate('Usługi IT - drzewko')}>
                                <Text>Info</Text>
                            </Button>
                            <Button warning style={styles.btn} onPress={() => this.props.navigation.navigate('Usługi IT - drzewko')}>
                                <Text>Warning</Text>
                            </Button>
                            <Button warning style={styles.btn} onPress={() => this.props.navigation.navigate('Usługi IT - drzewko')}>
                                <Text>Minor</Text>
                            </Button>
                            <Button danger style={styles.btn} onPress={() => this.props.navigation.navigate('Usługi IT - drzewko')}>
                                <Text>Major</Text>
                            </Button>
                            <Button danger style={styles.btn} onPress={() => this.props.navigation.navigate('Usługi IT - drzewko')}>
                                <Text>Critical</Text>
                            </Button>
                        </View>
                    </Card>
                </View>
                <Divider style={{backgroundColor: '#0072c6', margin: 15, marginBottom: 0}}/>
                <View>
                    <Card title={'System EKW - Odczucia użytkowników'}>
                        <MocksButtons navigation={this.props.navigation}></MocksButtons>
                    </Card>
                    <Card title={'System EKW - Architektura'}>
                        <MocksButtons navigation={this.props.navigation}></MocksButtons>
                    </Card>
                    <Card title={'System EKW - Aplikacje'}>
                        <MocksButtons navigation={this.props.navigation}></MocksButtons>
                    </Card>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 5,
        minWidth: 50,
        justifyContent: 'center',
    }
});
