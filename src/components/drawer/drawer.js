import {SafeAreaView, ScrollView} from "react-native";
import {DrawerItems} from "react-navigation";
import React from "react";

const DrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <DrawerItems {...props}>

            </DrawerItems>
        </ScrollView>
    </SafeAreaView>
);
export default DrawerComponent;