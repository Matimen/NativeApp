import React from 'react';
import {Text, View, SafeAreaView, ScrollView, StatusBar, Button} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import ServicesScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DrawerComponent from "./src/components/drawer/drawer";
import AlertsScreen from "./src/screens/AlertsScreen";

export default class App extends React.Component {

    componentDidMount() {
        StatusBar.setHidden(true);
    }
    render() {
        return (
            <Navigator/>
        );
    }
}

const Navigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Usługi: ServicesScreen,
        Alerty: AlertsScreen
    },
    {
        header: <Text>asd</Text>,
        contentComponent: DrawerComponent
    },
);
