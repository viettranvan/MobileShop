import React, {Component} from 'react';
import {View,Text,TouchableOpacity, Dimensions, StyleSheet,Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';


const {height} = Dimensions.get("window");
export default class Header extends Component{

    render(){
        return(
        <View style={{height: height/8.5, backgroundColor: '#608cd6'}}>
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={ () => this.props.navigation.openDrawer() }
                    style={{paddingLeft:5}}
                >
                    <MaterialCommunityIcons name="menu-open" color='white' size={40} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={ () => this.props.navigation.navigate('Main') }>
                    <Text style={styles.title}>Mobile
                        <Text style={{ fontWeight: 'bold', fontSize: 26, color: '#10e345' }}> Shop</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Cart')}
                    style={{paddingRight:10, paddingTop: 3}}
                >
                    <MaterialCommunityIcons name="cart" color='white' size={30} />
                </TouchableOpacity>
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
        fontSize: 26, 
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
        paddingTop: 3
    },
    textinp: {
        height: 40,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 10
    }
  });
  