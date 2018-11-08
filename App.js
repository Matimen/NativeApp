import React from 'react';
import {Text, View, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import {Header, Icon} from 'react-native-elements'
import SettingsScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AlertsScreen from "./src/screens/AlertsScreen";
import DrawerComponent from "./src/components/drawer/drawer";

export default class App extends React.Component {

    componentDidMount(){
        StatusBar.setHidden(true);
    }
    render() {
        return (
                <Navigator />
        );
    }
}

const Navigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Usługi: SettingsScreen,
        Alerty: AlertsScreen
    },
    {
        contentComponent: DrawerComponent
    }
);
