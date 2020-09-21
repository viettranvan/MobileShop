import React, {Component} from 'react';
import {View,Text,TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';


const {height} = Dimensions.get("window");
export default class Header extends Component{
    render(){
        return(
        <View style={styles.container,{height: height/8 }}>
            <View>
                <Text style={styles.title}>Mobile
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#10e345' }}> Shop</Text>
                </Text>
            </View>
            <TextInput
                style={styles.textinp}
                placeholder='Bạn muốn mua điện thoại gì?'
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 24, 
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white'
    },
    textinp: {
        height: 40,
        marginRight: 40,
        marginLeft: 40,
        
    }
  });
  