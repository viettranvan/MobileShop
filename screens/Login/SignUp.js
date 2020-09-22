import React, {Component} from 'react';
import {View,  Text, Button} from 'react-native';


export default class SignUp extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                <Text>màn hình sign up </Text>
                {/* <Button
                    title="go to Order history screen"
                    onPress={() => this.props.navigation.navigate("OrderHistory")}
                /> */}
                
            </View>
        );
    }
}