import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button} from "native-base";

export class MocksButtons extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button success style={styles.btn} onPress={()=>this.props.navigation.navigate('Usługi IT - drzewko')}>
                    <Text>
                        0
                    </Text>
                </Button>
                <Button info style={styles.btn} onPress={()=>this.props.navigation.navigate('Usługi IT - drzewko')}>
                    <Text>
                        1
                    </Text>
                </Button>
                <Button warning style={styles.btn} onPress={()=>this.props.navigation.navigate('Usługi IT - drzewko')}>
                    <Text>
                        4
                    </Text>
                </Button>
                <Button warning style={styles.btn} onPress={()=>this.props.navigation.navigate('Usługi IT - drzewko')}>
                    <Text>
                        6
                    </Text>
                </Button>
                <Button danger style={styles.btn} onPress={()=>this.props.navigation.navigate('Usługi IT - drzewko')}>
                    <Text>
                        3
                    </Text>
                </Button>
                <Button danger style={styles.btn} onPress={()=>this.props.navigation.navigate('Usługi IT - drzewko')}>
                    <Text>
                        1
                    </Text>
                </Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 5,
        minWidth: 50,
        justifyContent: 'center',
    }
});