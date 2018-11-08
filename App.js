import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import MyHeader from './src/components/common/header.js';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MyHeader />
                <Text>LOOOsdOL</Text>

                <Button
                    raised
                    icon={{name: 'cached'}}
                    title='BUTTON WITH ICON'/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
