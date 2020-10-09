import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,Linking } from 'react-native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

class Contact extends Component {
    render() {
        const {navigation } = this.props;
        
        return (
            <View style={styles.wrapper}>
                <View>
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
                </View>

                <View style={styles.infoContainer}>
                    <Text style={{fontSize: 20, textAlign: 'center',fontStyle: 'italic'}}>Liên hệ với chúng tôi</Text>
                    <View style={styles.rowInfoContainer}>
                        <MaterialCommunityIcons name='map-marker-radius' size={50} />
                        <View style={{flex:1}}>
                            <Text style={styles.infoText} numberOfLines={2}>280 An Dương Vương, Phường 4, Quận 5, Tp. HCM</Text>
                        </View>
                    </View>
                    <View style={styles.rowInfoContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:0394848858`)}>
                            <MaterialCommunityIcons name='phone' color='green' size={50} />
                        </TouchableOpacity>    
                        <Text style={styles.infoText}>(+84) 0394848858</Text>
                    </View>
                    <View style={styles.rowInfoContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:viettranvan2k@example.com')} >
                            <MaterialCommunityIcons name='gmail' color='red' size={50} />
                        </TouchableOpacity>
                        <Text style={styles.infoText}>viettranvan2k@gmail.com</Text>
                    </View>
                    <View style={[styles.rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <TouchableOpacity onPress={() => Linking.openURL('sms:0394848858')}>
                            <MaterialCommunityIcons name='android-messages' color='blue' size={50} />
                        </TouchableOpacity>
                        <Text style={styles.infoText}>(+84) 0394848858</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { 
        flex: 1, 
    },
    infoContainer: {
        padding: 10,
        backgroundColor: '#FFF',
        margin: 15,
        marginTop: 0,
        borderRadius: 2,
    },
    rowInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        color: '#AE005E',
        fontWeight: '500',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10
    },
    header:{
        backgroundColor: '#92bff0',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    training:{
        backgroundColor: '#f0f0ed',
        margin:15,
        justifyContent:'center',
        alignItems:'center'
    },
    openLink: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 20
    },
});

export default Contact;

                