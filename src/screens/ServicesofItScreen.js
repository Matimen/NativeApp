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
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Button success style={styles.btn} onPress={()=>this.props.navigation.navigate('Usługi IT - drzewko')}>
                                <Text>
                                    OK
                                </Text>
                            </Button>
                            <Button info style={styles.btn} >
                                <Text>
                                    Info
                                </Text>
                            </Button>
                            <Button warning style={styles.btn} >
                                <Text>
                                    Warning
                                </Text>
                            </Button>
                            <Button warning style={styles.btn}>
                                <Text>
                                    Minor
                                </Text>
                            </Button>
                            <Button danger style={styles.btn} >
                                <Text>
                                    Major
                                </Text>
                            </Button>
                            <Button danger style={styles.btn} >
                                <Text>
                                    Critical
                                </Text>
                            </Button>
                        </View>
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
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 5,
        minWidth: 50,
        justifyContent: 'center',
    }
});
