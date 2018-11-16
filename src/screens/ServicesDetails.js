import React, {Component} from 'react';
import {Tabs, Tab, Container} from "native-base";
import {
    View, Text, StyleSheet, Picker, ScrollView
} from 'react-native';
import DrawerIcon from "../components/menu-icon/menu-icon";
import {Card, Divider, FormInput, FormLabel} from "react-native-elements";
import {Col, Row, Rows, Table, TableWrapper} from "react-native-table-component";
import Moment from "moment";

export default class ServicesDetails extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz'],
            tableTitle: ['Od', 'Do'],
            tableData: [
                ['00:00', '00:00', '00:00', '00:00', '00:00', '00:00', '00:00'],
                ['23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59'],
            ]
        }
    }

    render() {
        return (
            <Container>
                <View>
                    <DrawerIcon name={'Szczegóły usług IT'}/>
                </View>
                <Container>
                    <Tabs style={{margin: 10}}>
                        <Tab heading="Informacje" tabStyle={{backgroundColor: '#0072c6'}}
                             activeTabStyle={{backgroundColor: '#016ac6'}}>
                            <Card>
                                <FormLabel>Nazwa:</FormLabel>
                                <FormInput> System EKW - odczucia użytkowników</FormInput>
                                <FormLabel>Alias:</FormLabel>
                                <FormInput> -</FormInput>
                                <FormLabel>Opis:</FormLabel>
                                <FormInput> -</FormInput>
                                <FormLabel>Typ:</FormLabel>
                                <FormInput> Service model</FormInput>
                                <FormLabel>Status:</FormLabel>
                                <FormInput inputStyle={{backgroundColor: 'yellow', width: 70}}> Warning</FormInput>
                                <FormLabel>Typ:</FormLabel>
                                <FormInput> Service model</FormInput>
                            </Card>
                        </Tab>
                        <Tab heading="Kalendarz" tabStyle={{backgroundColor: '#0072c6'}}
                             activeTabStyle={{backgroundColor: '#016ac6'}}>
                            <Card title={'24x7 - 24 Hours A Day, 7 Days A Week'}>
                                <Table>
                                    <Row data={this.state.tableHead} flexArr={[1, 1, 1, 1, 1, 1, 1, 1]}
                                         style={styles.head} textStyle={styles.text}/>
                                    <TableWrapper style={styles.wrapper}>
                                        <Col data={this.state.tableTitle} style={styles.title} heightArr={[28, 28]}
                                             textStyle={styles.text}/>
                                        <Rows data={this.state.tableData} flexArr={[1, 1, 1, 1, 1, 1, 1]}
                                              style={styles.row} textStyle={styles.text}/>
                                    </TableWrapper>
                                </Table>
                            </Card>
                            <Card>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{height: 50, width: '100%'}}
                                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                    <Picker.Item label="Java" value="java"/>
                                    <Picker.Item label="JavaScript" value="js"/>
                                </Picker>
                                <Table>
                                    <Row data={this.state.tableHead} flexArr={[1, 1, 1, 1, 1, 1, 1, 1]}
                                         style={styles.head} textStyle={styles.text}/>
                                    <TableWrapper style={styles.wrapper}>
                                        <Col data={this.state.tableTitle} style={styles.title} heightArr={[28, 28]}
                                             textStyle={styles.text}/>
                                        <Rows data={this.state.tableData} flexArr={[1, 1, 1, 1, 1, 1, 1]}
                                              style={styles.row} textStyle={styles.text}/>
                                    </TableWrapper>
                                </Table>
                            </Card>
                        </Tab>
                        <Tab heading="Raport" tabStyle={{backgroundColor: '#0072c6'}}
                             activeTabStyle={{backgroundColor: '#016ac6'}}>
                            <Card>
                                <Text>Data od:</Text>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{height: 50, width: '100%'}}
                                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                    <Picker.Item label="10.11.2018" value="java"/>
                                    <Picker.Item label="JavaScript" value="js"/>
                                </Picker>
                                <Text>Data do:</Text>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{height: 50, width: '100%'}}
                                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                    <Picker.Item label="31.12.2018" value="java"/>
                                    <Picker.Item label="JavaScript" value="js"/>
                                </Picker>
                            </Card>
                            <Card title={'Raport'}>
                                <Text style={{color: 'grey', fontSize: 12}}>
                                    W celu wygenerowania raportu wraz z okresami przerw wybierz zakres dat z kalendarza.
                                </Text>
                            </Card>
                            <Card title={'Dane analityczne'}>
                                <Text style={{color: 'grey', fontSize: 12}}>
                                    Brak danych.
                                </Text>
                            </Card>
                        </Tab>
                        <Tab heading="Alerty" tabStyle={{backgroundColor: '#0072c6'}}
                             activeTabStyle={{backgroundColor: '#016ac6'}}>
                            <Card>
                                <Card>
                                    <Text>Data od:</Text>
                                    <Picker
                                        selectedValue={this.state.language}
                                        style={{height: 50, width: '100%'}}
                                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                        <Picker.Item label="10.11.2018" value="java"/>
                                        <Picker.Item label="JavaScript" value="js"/>
                                    </Picker>
                                    <Text>Data do:</Text>
                                    <Picker
                                        selectedValue={this.state.language}
                                        style={{height: 50, width: '100%'}}
                                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                        <Picker.Item label="31.12.2018" value="java"/>
                                        <Picker.Item label="JavaScript" value="js"/>
                                    </Picker>
                                </Card>
                                <ScrollView style={{marginTop: 5}}>
                                    <Card
                                        title={'ID: 0'}>
                                        <Text style={styles.card}>
                                            ID: 0
                                        </Text>
                                        <Text style={styles.card}>
                                            Start: 01.05.2018r.
                                        </Text>
                                        <Text style={styles.card}>
                                            Koniec: 31.10.2018r.
                                        </Text>
                                        <Text style={styles.card}>
                                            Klasa: ESIM
                                        </Text>
                                        <Text style={styles.card}>
                                            Klasa obiektu: MSS
                                        </Text>
                                        <Text style={styles.card}>
                                            Obiekt: S_EKW_B_OGOL_ZLOZ
                                        </Text>
                                        <Text style={styles.card}>
                                            Pilność: WARNING
                                        </Text>
                                        <Text style={styles.card}>
                                            Priorytet: 1
                                        </Text>
                                        <Text style={styles.card}>
                                            Status: Closed
                                        </Text>
                                        <Text style={styles.card}>
                                            Message: Liczba otwartych alertów: 1 (id: 48263, host: swankwesbapl01p, obiekt: BIZ _ OGOL _ ZLOZENIE_WNIOSKU_ODPIS, start: 2018-11-16 12:57:23 #)
                                        </Text>
                                        <Text style={styles.card}>
                                            Aktualizacja: 2018-11-16 13:03:03
                                        </Text>
                                    </Card>
                                    <Card
                                        title={'ID: 1'}>
                                        <Text style={styles.card}>
                                            ID: 1
                                        </Text>
                                        <Text style={styles.card}>
                                            Start: 01.05.2018r.
                                        </Text>
                                        <Text style={styles.card}>
                                            Koniec: 31.10.2018r.
                                        </Text>
                                        <Text style={styles.card}>
                                            Klasa: ESIM
                                        </Text>
                                        <Text style={styles.card}>
                                            Klasa obiektu: MSS
                                        </Text>
                                        <Text style={styles.card}>
                                            Obiekt: S_EKW_B_OGOL_ZLOZ
                                        </Text>
                                        <Text style={styles.card}>
                                            Pilność: WARNING
                                        </Text>
                                        <Text style={styles.card}>
                                            Priorytet: 1
                                        </Text>
                                        <Text style={styles.card}>
                                            Status: Closed
                                        </Text>
                                        <Text style={styles.card}>
                                            Message: Liczba otwartych alertów: 1 (id: 48263, host: swankwesbapl01p, obiekt: BIZ _ OGOL _ ZLOZENIE_WNIOSKU_ODPIS, start: 2018-11-16 12:57:23 #)
                                        </Text>
                                        <Text style={styles.card}>
                                            Aktualizacja: 2018-11-16 13:03:03
                                        </Text>
                                    </Card>
                                    <Card
                                        title={'ID: 2'}>
                                        <Text style={styles.card}>
                                            ID: 2
                                        </Text>
                                        <Text style={styles.card}>
                                            Start: 01.05.2018r.
                                        </Text>
                                        <Text style={styles.card}>
                                            Koniec: 31.10.2018r.
                                        </Text>
                                        <Text style={styles.card}>
                                            Klasa: ESIM
                                        </Text>
                                        <Text style={styles.card}>
                                            Klasa obiektu: MSS
                                        </Text>
                                        <Text style={styles.card}>
                                            Obiekt: S_EKW_B_OGOL_ZLOZ
                                        </Text>
                                        <Text style={styles.card}>
                                            Pilność: WARNING
                                        </Text>
                                        <Text style={styles.card}>
                                            Priorytet: 1
                                        </Text>
                                        <Text style={styles.card}>
                                            Status: Closed
                                        </Text>
                                        <Text style={styles.card}>
                                            Message: Liczba otwartych alertów: 1 (id: 48263, host: swankwesbapl01p, obiekt: BIZ _ OGOL _ ZLOZENIE_WNIOSKU_ODPIS, start: 2018-11-16 12:57:23 #)
                                        </Text>
                                        <Text style={styles.card}>
                                            Aktualizacja: 2018-11-16 13:03:03
                                        </Text>
                                    </Card>
                                    <Card
                                        title={'ID: 3'}>
                                        <Text style={styles.card}>
                                            ID: 3
                                        </Text>
                                        <Text style={styles.card}>
                                            Start: 01.05.2018r.
                                        </Text>
                                        <Text style={styles.card}>
                                            Koniec: 31.10.2018r.
                                        </Text>
                                        <Text style={styles.card}>
                                            Klasa: ESIM
                                        </Text>
                                        <Text style={styles.card}>
                                            Klasa obiektu: MSS
                                        </Text>
                                        <Text style={styles.card}>
                                            Obiekt: S_EKW_B_OGOL_ZLOZ
                                        </Text>
                                        <Text style={styles.card}>
                                            Pilność: WARNING
                                        </Text>
                                        <Text style={styles.card}>
                                            Priorytet: 1
                                        </Text>
                                        <Text style={styles.card}>
                                            Status: Closed
                                        </Text>
                                        <Text style={styles.card}>
                                            Message: Liczba otwartych alertów: 1 (id: 48263, host: swankwesbapl01p, obiekt: BIZ _ OGOL _ ZLOZENIE_WNIOSKU_ODPIS, start: 2018-11-16 12:57:23 #)
                                        </Text>
                                        <Text style={styles.card}>
                                            Aktualizacja: 2018-11-16 13:03:03
                                        </Text>
                                    </Card>
                                </ScrollView>
                            </Card>
                        </Tab>
                    </Tabs>
                </Container>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 5,
        minWidth: 50,
        justifyContent: 'center',
    },
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    head: {height: 40, backgroundColor: '#f1f8ff'},
    wrapper: {flexDirection: 'row'},
    title: {flex: 1, backgroundColor: '#f6f8fa'},
    row: {height: 28},
    text: {textAlign: 'center'},
    card: {marginBottom: 5}
});
