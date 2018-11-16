import React, {Component} from 'react'
import {Text, View} from 'react-native'
import TreeView from '@zaguini/react-native-tree-view'
import {Icon} from "native-base";

import DrawerIcon from '../components/menu-icon/menu-icon';

export default class TreeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Tree',
        drawerIcon: ({tintColor}) => (<Icon name={'build'} color={tintColor}/>),
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
    }

    componentDidMount() {
       // console.log(this.treeView.getRawData())
    }

    render() {
        return (
            <View>
                <DrawerIcon name={'Stany Usług IT'}/>
                <TreeView
                    ref={ref => this.treeView = ref}
                    data={this.state.data}
                    onItemPress ={console.log('')}
                    renderItem={(item, level) => (
                        <View>
                            <Text
                                style={{
                                    marginLeft: 25 * level,
                                 
                                }}
                            >
                                {
                                    item.collapsed !== null ?
                                        <Text>{item.collapsed ? '>' : ' \\/ '}</Text> :
                                        <Text> - </Text>
                                }
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

