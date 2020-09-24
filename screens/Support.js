import React, {Component} from 'react';
import {View,  Text, Button, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'


export default class Support extends Component{
    render(){
        const {navigation } = this.props;
        return(
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name='backburger' size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                        <MaterialCommunityIcons name='home-outline' size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
                        <MaterialCommunityIcons name='cart' size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                        <MaterialCommunityIcons name='magnify' size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                        <MaterialCommunityIcons name='account-outline' size={40} />
                    </TouchableOpacity>
                </View>

                <View style={styles.training}>
                    <Text style={{fontSize: 20}}>Xem hướng dẫn chi tiết về ứng dung</Text>
                    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://google.com')}}>
                        <Text style={styles.openLink}>Hướng dẫn sử dụng</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contactContainer}>
                    
                    
                    <Text style={{fontSize: 20, marginRight: 20, marginLeft:20}}>Mọi thắc mắc về ứng dụng xin vui lòng liên hệ qua:</Text>
                    <View style={styles.contact}>
                        <MaterialCommunityIcons
                            name='gmail'
                            color='red'
                            size={50}
                        />
                            <Text> : </Text>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:viettranvan2k@example.com')} >
                            <Text style={styles.email}>Nhấn để mở</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contact}>
                        <MaterialCommunityIcons
                            name='phone'
                            color='green'
                            size={50}
                        />
                            <Text> : </Text>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:0394848858`)}>
                            <Text style={styles.email}>Nhấn để mở</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.contact}>
                        <MaterialCommunityIcons
                            name='android-messages'
                            color='blur'
                            size={50}
                        />
                            <Text> : </Text>
                        <TouchableOpacity onPress={() => Linking.openURL('sms:0394848858')}>
                            <Text style={styles.email}>Nhấn để mở</Text>
                        </TouchableOpacity>
                    </View>                    
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#92bff0',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    training:{
        margin:15,
        justifyContent:'center',
        alignItems:'center'
    },
    contactContainer:{
        justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10
    },
    openLink: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 20
    },
    email: {
        fontSize: 14,
        color:'blue',
        textDecorationLine:'underline'
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});