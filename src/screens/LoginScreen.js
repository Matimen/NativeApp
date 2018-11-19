import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {Item, Form, Input, Icon, Button, Spinner} from "native-base";


export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
    }
    static navigationOptions = {
        drawerLabel: () => null,
        drawerLockMode: 'locked-closed'
    };
    onLogin(){
        this.setState({
            loading: true
        })
        setTimeout(()=>{
            this.props.navigation.navigate('Strona Główna')
        },1500)
    }
    render() {
        return (
            <ImageBackground source={require('../assets/login_background.jpg')} style={{flex:1, resizeMode: 'cover',alignItems: 'center'}} blurRadius={1}>
                <View opacity={0.8} style={{
                    marginTop: 160,
                    height: 100,
                    backgroundColor: '#0072c6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 15,
                    borderRadius: 20,
                    width: '90%'
                }}>
                    <View>
                        <Image source={require('../assets/asseco.png')}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={{color: 'white', height: 50}}>
                            <Image style={{height: 25, width: 25}}
                                   source={require('../assets/wheel.png')}/> MonIT Portal v1.01.001
                        </Text>
                    </View>
                </View>
                <View style={{marginTop: 50, borderRadius: 20, width: '90%'}}>
                    <Form >
                        <Item rounded last style={{borderRadius: 20, marginBottom: 5,backgroundColor: 'rgba(255,255,255, 0.7)'}}>
                            <Icon active name='person' />
                            <Input placeholder='e-mail'/>
                        </Item>
                        <Item rounded last style={{borderRadius: 20, marginBottom: 15, backgroundColor: 'rgba(255,255,255, 0.7)'}}>
                            <Icon active name='lock' />
                            <Input placeholder='hasło'/>
                        </Item>
                    </Form>
                </View>
                <View style={{borderRadius: 20, width: '90%'}}>
                        <Button onPress={()=>this.onLogin()} opacity={0.9} style={{borderRadius: 20, width: '100%', justifyContent: 'center',backgroundColor: '#0072c6'}}>
                            {this.state.loading?
                                <Spinner color='white' />
                                :
                                <Text opacity={0.7} style={{fontSize: 20, color: 'white'}}>ZALOGUJ</Text>
                            }
                        </Button>
                </View>
                <View style={{borderRadius: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: 'rgba(255,255,255, 0.7)', fontSize: 15, margin: 7}}>Utwórz konto</Text>
                    <Text style={{color: 'rgba(255,255,255, 0.7)', fontSize: 15, margin: 7}}>Zapomniałeś hasła?</Text>
                </View>
            </ImageBackground>
        )
    }

}