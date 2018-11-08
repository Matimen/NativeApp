import React from 'react';
import {Text, View, SafeAreaView, ScrollView, StatusBar, Button} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import SettingsScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DrawerComponent from "./src/components/drawer/drawer";

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
        Alerty: HomeScreen,
        Usługi: SettingsScreen
    },
    {
        contentComponent: DrawerComponent
    }
);
