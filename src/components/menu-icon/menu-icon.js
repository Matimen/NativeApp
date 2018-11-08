import {Text, View} from "react-native";
import {withNavigation} from "react-navigation";
import React, {Component} from "react";
import {Icon} from "react-native-elements";

class DrawerIcon extends React.Component {
    render() {
       return (
           <View style={{alignItems:'flex-start'}} >
               <Icon name={'reorder'} color={'#0072c6'} onPress={ ()=> this.props.navigation.openDrawer() }/>
           </View>
       )
    }
}
export default withNavigation(DrawerIcon);