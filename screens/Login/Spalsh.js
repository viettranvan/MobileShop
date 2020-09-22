import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';
import { createAnimatableComponent } from 'react-native-animatable';


const Splash = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header} >
                <Image
                    animation='bounce'
                    source={require('../../assets/mobile_logo.jpg')}
                    style={styles.logo}
                    resizeMode='stretch'
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay connect with everyone</Text>
                <Text style={styles.text}>Sign with accout</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.SignIn}
                        >
                            <Text>Get started!!!</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
    
}

export default Splash;
const {height} = Dimensions.get('window');
const height_logo = height*0.28;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#388bc2'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 50
    },
    title: {
        color: '#009387',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    SignIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
}); 