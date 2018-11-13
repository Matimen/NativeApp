import {Form, Item} from "native-base";
import {Text, View, Picker} from "react-native";
import React, {Component} from "react";

export default class TableFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertsData : [],
            status: ''
        };
    }
    onValueChange(value) {
        this.setState({
            status: value
        });
    }
    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                </Picker>
            </View>
        )
    }
}
