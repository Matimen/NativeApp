import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {Content, Left, Body, Right} from 'native-base';
import {DrawerItems} from "react-navigation";
import React from "react";
import {Avatar, Divider} from "react-native-elements";

const DrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{
            height: 100,
            backgroundColor: '#0072c6',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 15
        }}>
            <View>
                <Image source={require('../../assets/asseco.png')}/>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={{color: 'white', height: 50}}>
                    <Image style={{height: 25, width: 25}}
                           source={require('../../assets/wheel.png')}/> MonIT Portal v1.01.001
                </Text>
            </View>
        </View>
        <ScrollView>
            <DrawerItems {...props}>
            </DrawerItems>
        </ScrollView>

        <ScrollView style={{paddingTop: 200}}>
            <View>
                <Left>
                    <Avatar
                        small
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                        onPress={() => props.navigation.navigate('Panel użytkownika')}
                        activeOpacity={0.7}
                    />
                </Left>
                <Right>
                    <Text style={{fontSize: 15}} onPress={() => props.navigation.navigate('Panel użytkownika')}>Panel Użytkownika</Text>
                </Right>
            </View>
            <Divider style={{backgroundColor: '#0072c6', margin: 10}}/>
            <View style={{marginTop: 5}}>
                <Left>
                    <Text style={{fontSize: 15}}>Wyloguj</Text>
                </Left>
            </View>
        </ScrollView>
    </SafeAreaView>
);
export default DrawerComponent;