import React from 'react';
import {Text, View} from 'react-native';
import {styles} from "src/styles/app-styles";
import SideMenu from "src/components/side-menu/side-menu";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SideMenu/>
            </View>
        );
    }
}
