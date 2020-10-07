import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, ToastAndroid} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import getToken from '../../api/js/getToken';
import urls  from '../../urls';

const change_infoURL = urls[10].url;
export default class ChangeInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            password:'',
            new_password: '',
            confirm_password: '',
            isValidPassword: false,
            check_textInputPasswordChange: false,
            isSecureTextEntry1: true,
            isSecureTextEntry2: true,
            isSecureTextEntry3: true,
        }
    }
    showPassword(){
        this.setState({
            isSecureTextEntry1: !this.state.isSecureTextEntry1
        })
    }
    showNewPassword(){
        this.setState({
            isSecureTextEntry2: !this.state.isSecureTextEntry2
        })
    }
    showConfirmPassword(){
        this.setState({
            isSecureTextEntry3: !this.state.isSecureTextEntry3
        })
    }
    ChangePassword(){
        var {password,new_password,confirm_password} = this.state;
        // xóa khoảng trắng
        password  = password.replace(/\s+/g, '');
        new_password = new_password.replace(/\s+/g, '');
        confirm_password = confirm_password.replace(/\s+/g, '');

        if(new_password.length < 8){
            ToastAndroid.show('Mật khẩu phải chứa ít nhất 8 ký tự',ToastAndroid.SHORT);
        }
        else{
            if(new_password !== confirm_password){
                ToastAndroid.show('Mật khẩu không trùng khớp',ToastAndroid.SHORT);
            }
            else{
                getToken()
                .then(token => {
                    fetch(change_infoURL,{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({ token, password, new_password, confirm_password })
                    })
                    .then(res => res.text())
                    .then(data => {
                        if(data == 'INCORRECT_PASSWORD'){
                            ToastAndroid.show('Mật khẩu không chính xác',ToastAndroid.SHORT);
                        }
                        else if(data == 'SUCCESS'){
                            ToastAndroid.show('Đổi mật khẩu thành công',ToastAndroid.SHORT);
                            this.props.navigation.navigate('Profile');
                        }
                    })
                    .catch(err => console.log(err));    
                })
            }
        }
    }

    render(){
        const {user} = this.props.route.params;
        const {password,new_password,confirm_password,isSecureTextEntry1,isSecureTextEntry2,isSecureTextEntry3} = this.state;

        const eye = <Feather name='eye' size={25} color='grey' />
        const eye_off = <Feather name='eye-off' size={25} color='grey' />
        return(
            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                        <MaterialCommunityIcons name="arrow-left" color='white' size={40} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Thay đổi mật khẩu</Text>
                    <View style={{paddingRight:15}}/>
                </View>

                <View style={styles.body}>
                    <ScrollView style={styles.changePassContainer}>
                        {/* Tên đăng nhập - email */}
                        <Text style={[styles.text_footer, { marginTop: 35 }]}>Tên đăng nhập</Text>
                        <View style={styles.action}>
                            <MaterialCommunityIcons name='account-outline' color="#05375a" size={20} />
                            <TextInput 
                                style={[styles.textInput,{color:'#7a7d6d'}]}
                                editable={false}
                                value={user.username}
                            />
                        </View>
                        {/* End Tên đăng nhập - email */}

                        {/* Mật khẩu cũ*/}
                        <Text style={[styles.text_footer, { marginTop: 35}]}>Mật khẩu hiện tại</Text>
                        <View style={styles.action}>
                            <Feather name="lock" color="#05375a" size={20} />
                            <TextInput 
                                placeholder="Vui lòng nhập mật khẩu hiện tại"            
                                style={styles.textInput}
                                secureTextEntry={isSecureTextEntry1}
                                autoCapitalize="none"
                                blurOnSubmit={false}
                                onChangeText={(val) => this.setState({password: val})}
                            />
                            <TouchableOpacity onPress={() => this.showPassword()}>
                                {password.length > 0 ? isSecureTextEntry1 ? eye : eye_off : null}
                            </TouchableOpacity>
                        </View>
                        {/*End Mật khẩu cũ*/}

                        {/* Mật khẩu Mới*/}
                        <Text style={[styles.text_footer, { marginTop: 35}]}>Mật khẩu mới</Text>
                        <View style={styles.action}>
                            <Feather name="lock" color="#05375a" size={20} />
                            <TextInput 
                                placeholder="Vui lòng nhập mật khẩu mới"
                                secureTextEntry={isSecureTextEntry2}
                                style={styles.textInput}
                                autoCapitalize="none"
                                blurOnSubmit={false}
                                onChangeText={(val) => this.setState({new_password : val})}

                            />
                            <TouchableOpacity onPress={() => this.showNewPassword()}>
                                {new_password.length > 0 ? isSecureTextEntry2 ? eye : eye_off : null}
                            </TouchableOpacity>
                        </View>
                        {new_password.length >= 8 ? null : 
                            <Text style={styles.errorMsg}>Mật khẩu phải chứa ít nhất 8 ký tự</Text>
                        }
                        {/*End Mật khẩu mới*/}

                        {/* Nhập lại mật khẩu */}
                        <Text style={[styles.text_footer, { marginTop: 35 }]}>Xác nhận mật khẩu</Text>
                        <View style={styles.action}>
                            <Feather name="lock" color="#05375a" size={20} />
                            <TextInput 
                                placeholder="Xác nhận mật khẩu của bạn"
                                style={styles.textInput}
                                secureTextEntry={isSecureTextEntry3}
                                autoCapitalize="none"
                                blurOnSubmit={false}
                                onChangeText={(val) => this.setState({confirm_password: val})}
                            />
                            <TouchableOpacity onPress={() => this.showConfirmPassword()}>
                                {confirm_password.length > 0 ? isSecureTextEntry3 ? eye : eye_off : null}
                            </TouchableOpacity>
                        </View>
                        {/*End Nhập lại mật khẩu */}

                        {/* Button đổi mật khẩu*/}
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.signIn} onPress={() => {this.ChangePassword()}} >
                                <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn} >
                                    <Text style={[styles.textSign, { color:'#fff' }]}>Đổi mật khẩu</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        {/*End Button đăng ký - đăng nhập*/}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        flex: 1, 
    },
    header: {
    flex: 1,
    backgroundColor: "#2ABB9C",
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: "row",
    paddingHorizontal: 10,
    },
    headerTitle: { 
        color: "#fff", 
        fontSize: 20,
    },
    body: {
        flex:10,
    },
    changePassContainer:{
        backgroundColor: '#edede6',
        marginTop: 10,
        marginBottom: 10,
        padding: 10
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20
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
        fontWeight: 'bold'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});
