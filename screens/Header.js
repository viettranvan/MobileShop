import React, {Component} from 'react';
import {View,Text,TouchableOpacity, Dimensions, StyleSheet,Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';


const {height} = Dimensions.get("window");
export default class Header extends Component{

    render(){
        return(
        <View style={{height: height/9, backgroundColor: '#608cd6'}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={ () => this.props.navigation.openDrawer() }>
                    <MaterialCommunityIcons name="menu-open" color='white' size={40} />
                </TouchableOpacity>
                <Text style={styles.title}>Mobile
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#10e345' }}> Shop</Text>
                </Text>
                <Text>abc</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize: 24, 
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
    },
    textinp: {
        height: 40,
        marginRight: 40,
        marginLeft: 40,
        
    }
  });
  