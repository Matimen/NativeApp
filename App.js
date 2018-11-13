import React from 'react';
import {Text, View, SafeAreaView, ScrollView, StatusBar, Button} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import ServicesScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DrawerComponent from "./src/components/drawer/drawer";
import AlertsScreen from "./src/screens/AlertsScreen";
import StateofServicesScreen from "./src/screens/StateofServicesScreen";
import ServicesofItScreen from "./src/screens/ServicesofItScreen";


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
        'Strona Główna': HomeScreen,
        Alerty: AlertsScreen,
        'Stany Usług IT': StateofServicesScreen,
        'Usługi IT': ServicesofItScreen
    },
    {
        contentComponent: DrawerComponent
    },
);
