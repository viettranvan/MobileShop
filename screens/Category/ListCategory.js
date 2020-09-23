import React, {Component} from 'react';
import {View,  Text, Button} from 'react-native';

export default class ListCategory extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
              {/* <Text>List Category nè ahihi</Text>
              <Button
                title="go back"
                onPress={() => this.props.navigation.goBack()}
              />
              <Button
                title="go to first"
                // onPress={() => this.props.navigation.navigate("Support")}
              /> */}
              <Text>List Category nè ahihi</Text>

            </View>
          );
    }
}