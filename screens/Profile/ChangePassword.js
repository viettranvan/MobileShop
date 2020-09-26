import React, {Component} from 'react';
import {View,  Text, Button} from 'react-native';

export default class ChangePassword extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                <Text>đã đăng </Text>
                {/* <Button
                    title="go to Order history screen"
                    onPress={() => this.props.navigation.navigate("OrderHistory")}
                /> */}
            </View>
        );
    }
}