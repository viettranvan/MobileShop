import React, {Component} from 'react';
import {View,  Text, Button} from 'react-native';

export default class ListCollection extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
              <Text>List collection</Text>
              <Button
                title="go back"
                onPress={() => this.props.navigation.goBack()}
              />
              <Button
                title="go to first screen"
                onPress={() => this.props.navigation.navigate("Support")}
              />
            </View>
          );
    }
}