import React, {Component} from 'react';
import {View,  Text, Button} from 'react-native';


export default class Support extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                <Text>màn hình hỗ trợ </Text>
                <Button
                    title="go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                
            </View>
        );
    }
}