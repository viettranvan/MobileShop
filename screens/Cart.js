import React, {Component} from 'react';
import {View,  Text, Button, Image} from 'react-native';

export default class Cart extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                <Text>Cart screen</Text>
                <Button
                    title="go to detail"
                    onPress={() => this.props.navigation.navigate("Detail")}
                />
                
            </View>
        );
    }
}