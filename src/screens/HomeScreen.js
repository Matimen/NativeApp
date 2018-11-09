import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Icon} from "react-native-elements";
import {Container, Header, Content, Card, CardItem, Body, Button} from 'native-base';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Strona Główna',
        drawerIcon: ({tintColor}) => (<Icon name={'notifications'} color={tintColor}/>),
    };

    render() {
        return (
            <View>
                <DrawerIcon name={'Strona Główna'}/>
                <View>
                    <Card>
                        <CardItem header>
                            <Text>ESIM - Event and Service Impact Manager</Text>
                        </CardItem>
                        <CardItem>
                            <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                            <Button success style={styles.btn}>
                                <Text>Click Me!</Text>
                            </Button>
                            <Button info style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            <Button warning style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            <Button warning style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            <Button danger style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            <Button danger style={styles.btn}>
                                <Text>Click !</Text>
                            </Button>
                            </Body>
                        </CardItem>

                    </Card>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 5,
    }
});

