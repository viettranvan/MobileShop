import React, {Component} from 'react';
import {View,  Text, Button} from 'react-native';

export default class OrderHistory extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
              <Text>Order history screen</Text>
              <Button
                title="go back"
                onPress={() => this.props.navigation.openDrawer()}
              />
              <Button
                title="go to first screen"
                onPress={() => this.props.navigation.popToTop()}
              />
            </View>
          );
    }
}