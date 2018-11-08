import {Text, View} from "react-native";
import {withNavigation} from "react-navigation";
import React, {Component} from "react";
import {Header, Icon} from "react-native-elements";

class DrawerIcon extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
       return (
           <Header
               outerContainerStyles={{ backgroundColor: '#0072c6', marginTop: -10 }}
               leftComponent={<Icon name={'reorder'} color={'#fff'} onPress={ ()=> this.props.navigation.openDrawer() }/>}
               centerComponent={{ text: this.props.name, style: { color: '#fff', fontSize: 20 } }}
               rightComponent={<Icon name={'home'} color={'#fff'} onPress={ ()=> this.props.navigation.goBack() }/>}
           />
       )
    }
}
export default withNavigation(DrawerIcon);