import React from 'react';
import {Text, View, SafeAreaView, ScrollView, StatusBar, Button} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import ServicesScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DrawerComponent from "./src/components/drawer/drawer";
import AlertsScreen from "./src/screens/AlertsScreen";
import StateofServicesScreen from "./src/screens/StateofServicesScreen";
import ServicesofItScreen from "./src/screens/ServicesofItScreen";
import UserScreen from "./src/screens/UserScreen";
import CardAlertsScreen from "./src/screens/CardAlertsScreen";
import TableFilters from "./src/components/filters/tableFilters";
import ServicesDetails from "./src/screens/ServicesDetails";

import TreeScreen from "./src/screens/TreeScreen";

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
        'Alerty': CardAlertsScreen,
        'Stany Usług IT': StateofServicesScreen,
        'Usługi IT': ServicesofItScreen,
        'Panel użytkownika': UserScreen,
        'Tabela Alerty': AlertsScreen,
        'Filters': TableFilters,
        'Szczegóły usług IT': ServicesDetails,
        'Usługi IT - drzewko':TreeScreen
    },
    {
        contentComponent: DrawerComponent

    },
);
