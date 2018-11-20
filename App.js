import React from 'react';
import {Text, View, SafeAreaView, ScrollView, StatusBar, Button} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import { Permissions, Notifications } from 'expo';

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
import LoginScreen from "./src/screens/LoginScreen";

export default class App extends React.Component {

    componentDidMount() {
        registerForPushNotificationsAsync();
        StatusBar.setHidden(true);
    }

    render() {

        return (
            <Navigator/>
        );
    }
}
let registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
}
const Navigator = createDrawerNavigator(
    {
        'Login': LoginScreen,
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
