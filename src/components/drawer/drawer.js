import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {DrawerItems} from "react-navigation";
import React from "react";

const DrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{height: 100, backgroundColor: '#0072c6', alignItems: 'center', justifyContent: 'center', paddingTop: 15}}>
            <View>
                <Image source={require('../../assets/asseco.png')}/>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={{color: 'white', height: 50}}>
                    <Image style={{ height: 25, width: 25}} source={require('../../assets/wheel.png')} />  MonIT Portal v1.01.001
                </Text>
            </View>
        </View>
        <ScrollView>
            <DrawerItems {...props}>
            </DrawerItems>
        </ScrollView>
    </SafeAreaView>
);
export default DrawerComponent;