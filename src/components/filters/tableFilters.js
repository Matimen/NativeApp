import {Form, Picker} from "native-base";
import {Text, View} from "react-native";
import React, {Component} from "react";

export default class TableFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key0",
            selected2: "key7",
            selected3: "key14"
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value

        });
    }
    onValueChange2(value2: string) {
        this.setState({
            selected2: value2
        });
    }
    onValueChange3(value3: string) {
        this.setState({
            selected3: value3
        });
    }
    render() {
        return (
            <View>
                <Text>Filtry</Text>
                <Form>
                    <Text>Alerty NOT CLOSED</Text>
                    <Picker
                        note
                        mode="dropdown"
                        style={{width: 150}}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        <Picker.Item label="Empty" value="key0"/>
                        <Picker.Item label="Ok" value="key1"/>
                        <Picker.Item label="Info" value="key2"/>
                        <Picker.Item label="Warning" value="key3"/>
                        <Picker.Item label="Minor" value="key4"/>
                        <Picker.Item label="Major" value="key5"/>
                        <Picker.Item label="Critical" value="key6"/>
                    </Picker>
                </Form>
                <Form>
                    <Text>Alerty NOT CLOSED klasa Icinga2</Text>
                    <Picker
                        note
                        mode="dropdown"
                        style={{width: 150}}
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2.bind(this)}
                    >
                        <Picker.Item label="Empty" value="key7"/>
                        <Picker.Item label="Ok" value="key8"/>
                        <Picker.Item label="Info" value="key9"/>
                        <Picker.Item label="Warning" value="key10"/>
                        <Picker.Item label="Minor" value="key11"/>
                        <Picker.Item label="Major" value="key12"/>
                        <Picker.Item label="Critical" value="key13"/>
                    </Picker>
                </Form>
                <Form>
                    <Text>Alerty NOT CLOSED klasa ESIM</Text>
                    <Picker
                        note
                        mode="dropdown"
                        style={{width: 150}}
                        selectedValue={this.state.selected3}
                        onValueChange={this.onValueChange3.bind(this)}
                    >
                        <Picker.Item label="Empty" value="key14"/>
                        <Picker.Item label="Ok" value="key15"/>
                        <Picker.Item label="Info" value="key16"/>
                        <Picker.Item label="Warning" value="key17"/>
                        <Picker.Item label="Minor" value="key18"/>
                        <Picker.Item label="Major" value="key19"/>
                        <Picker.Item label="Critical" value="key20"/>
                    </Picker>
                </Form>
            </View>
        )
    }
}
