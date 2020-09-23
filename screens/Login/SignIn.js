import React, {Component} from 'react';
import {View,  Text, StyleSheet, Dimensions, TouchableOpacity, Platform, TextInput} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SignUp from './SignUp';
import { Button } from 'react-native-paper';

const SignIn = ( {navigation} ) =>{
    
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        check_textInputPasswordChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        if(val.length !== 0 ){
            setData({
                ...data,
                email: val,
                check_textInputChange:  true,
            });
        }
        else{
            setData({
                ...data,
                email: val,
                check_textInputChange:  false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        if(val.length !== 0 ){
            setData({
                ...data,
                password: val,
                check_textInputPasswordChange:  true,
            });
        }
        else{
            setData({
                ...data,
                password: val,
                check_textInputPasswordChange:  false,
            });
        }
    }

    const toggleSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const eye = <Feather name='eye' size={25} color='grey' />
    const eye_off = <Feather name='eye-off' size={25} color='grey' />

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>

            <Animatable.View 
                animation='flipInX'
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons
                        name="account-outline"
                        size={30}
                    />
                    <TextInput 
                        placeholder="Vui lòng nhập Email"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                        blurOnSubmit={false}
                        returnKeyType='done'
                        autoFocus={true}
                    />

                    {/* Kiểm tra textinput có rỗng hay ko */}
                    { data.check_textInputChange ? 
                    <MaterialCommunityIcons
                        name='check-circle'
                        size={30}
                        color='green'
                    />
                    : null }
                </View>

                <Text style={[styles.text_footer,{marginTop: 30}]}>Mật khẩu</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons
                        name="lock-outline"
                        size={30}
                    />
                    <TextInput 
                        placeholder="Vui lòng nhập mật khẩu"
                        style={styles.textInput}
                        autoCapitalize='none'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                        blurOnSubmit={false}
                        
                    />
                    <TouchableOpacity onPress={toggleSecureTextEntry}>
                        {data.check_textInputPasswordChange ? 
                        data.secureTextEntry ? eye : eye_off  : null}
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.signIn}
                    >
                        <TouchableOpacity>
                            <Text style={styles.textSign}>Đăng Nhập</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn,{
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 10
                        }]}    
                    >
                            <Text style={[styles.textSign,{color:'green'}]}>Đăng Ký Ngay</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
    
}
export default SignIn;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    textSignUp: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
    },
    singUp:{
        flexDirection: 'row',
        marginTop: 20,
    },

  });