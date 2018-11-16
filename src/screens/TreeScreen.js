import React, {Component} from 'react'
import {Text, View} from 'react-native'
import TreeView from '@zaguini/react-native-tree-view'
import {Icon} from "native-base";
import DrawerIcon from '../components/menu-icon/menu-icon';
import {Card} from "react-native-elements";

export default class TreeScreen extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };
    state = {
        data: [
            {
                id: 'System EKW',
                name: ' System EKW - Odczucia użytkowników',
                children: [
                    {
                        id: ' Generowanie odpisów KW',
                        name: ' Generowanie odpisów KW',
                        children: [
                            {
                                id: ' Parametry biznesowe',
                                name: ' Parametry biznesowe',
                            },
                            {
                                id: ' Strona webowa',
                                name: ' Strona webowa',
                            },
                        ],
                    },
                    {
                        id: 'Logowanie do aplikacji',
                        name: 'Logowanie do aplikacji branżowej',
                        children: [
                            {
                                id: ' Parametry biznesowe1',
                                name: ' Parametry biznesowe',
                            },
                            {
                                id: ' Strona webowa1',
                                name: ' Strona webowa',
                            },
                        ],
                    },
                    {
                        id: 'Przeglądanie EKW',
                        name: 'Przeglądanie EKW',
                    },
                    {
                        id: 'Składanie wniosków EPW',
                        name: 'Składanie wniosków EPW',
                    },
                ],
            },
        ],
    };
    render() {
        return (
                <View>
                    <DrawerIcon name={'Usługi IT - drzewko'}/>
                    <Card>
                    <TreeView
                        ref={ref => this.treeView = ref}
                        data={this.state.data}
                        onItemPress={console.log('')}
                        renderItem={(item, level) => (
                            <View>
                                <Text style={{marginLeft: 25 * level, fontSize: 20, marginTop: 0}}>
                                    {
                                        item.collapsed !== null ?
                                            <Text >{item.collapsed ? <Icon name={'arrow-dropright'} style={{margin: 20}} ></Icon> : <Icon style={{margin: 20}} name={'arrow-dropdown'}></Icon>  }</Text> :
                                            <Text > - </Text>
                                    }
                                    <Text onPress={()=>this.props.navigation.navigate('Szczegóły usług IT')}>{item.name}</Text>
                                </Text>
                            </View>
                        )}
                    />
                    </Card>
                </View>
        )
    }
}

