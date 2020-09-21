import React, {Component} from 'react';
import {View,  Text, Button} from 'react-native';

export default class Profile extends Component{
    login(){
        console.log("login");
    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                <Text>Profile screen </Text>
                <Button
                    title="đăng nhập"
                    onPress={() => this.login()}
                />
            </View>
        );
    }
}