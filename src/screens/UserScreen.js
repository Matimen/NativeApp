import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView
} from 'react-native';
import {Container} from 'native-base';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {
    Avatar,
    Card,
    Divider,
    FormInput,
    FormLabel,
    FormValidationMessage,
    List,
    ListItem
} from "react-native-elements";


export default class UserScreen extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };

    render() {
        return (
            <ScrollView>
                <DrawerIcon name={'Panel użytkownika'}/>

                <View style={{alignItems: 'flex-start', justifyContent: 'center', margin: 20, flexDirection: 'row'}}>
                    <Avatar
                        medium
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <View>
                        <Text style={{marginLeft: 10, marginTop: 5, fontSize: 20}}>Krzysztof Nowak</Text>
                        <Text style={{color: 'grey', marginLeft: 10}}>Edytuj awatar</Text>
                    </View>
                </View>
                <Divider style={{backgroundColor: '#0072c6', margin: 15}}/>
                <View>
                    <Card title={'Dane osobowe'}>
                        <FormLabel>Imię:</FormLabel>
                        <FormInput> Krzysztof</FormInput>
                        <FormLabel>Nazwisko:</FormLabel>
                        <FormInput> Nowak</FormInput>
                        <FormLabel>Adres:</FormLabel>
                        <FormInput> ul. Dobra 15/2A</FormInput>
                        <FormLabel>Kod i miasto:</FormLabel>
                        <FormInput> 35-359 Rzeszów</FormInput>
                    </Card>
                </View>
                <View>
                    <Card title={'Moje ustawienia'}>
                        <FormLabel>Domyślny alert:</FormLabel>
                        <FormInput> Krzysztof</FormInput>
                        <FormLabel>Domyślny ekran</FormLabel>
                        <FormInput> Alerty</FormInput>
                    </Card>
                </View>
                <Divider style={{backgroundColor: '#FFF', margin: 15}}/>
            </ScrollView>
        )
    }

}