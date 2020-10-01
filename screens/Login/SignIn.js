import React, {Component} from 'react';
import {View,  Text, StyleSheet, TouchableOpacity, TextInput ,ToastAndroid} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import{ AuthContext } from '../../components/context';
import urls from '../../urls';
import global from '../../global';

const login_URL = urls[5].url;


const SignIn = ( {navigation} ) =>{
    
    const { signIn } = React.useContext(AuthContext);

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        check_textInputPasswordChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        usernameLength: 0,
        passwordLength: 0,
    });
    
    const textInputChange = (val) => {
        if(val.length >= 6 ){
            setData({
                ...data,
                username: val,
                check_textInputChange:  true,
                isValidUser:true,
                usernameLength: val.length,
            });
        }
        else{
            setData({
                ...data,
                username: val,
                check_textInputChange:  false,
                usernameLength: val.length,
            });
        }
    }

    const handlePasswordChange = (val) => {
        
        if(val.length >= 8 ){
            setData({
                ...data,
                password: val,
                check_textInputPasswordChange:  true,
                isValidPassword: true,
                passwordLength: val.length
            });
        }
        else if(val.length < 8 && val.length > 0){
            setData({
                ...data,
                password: val,
                check_textInputPasswordChange:  true,
                passwordLength: val.length
            });
        }
        else if(val.length == 0){
            setData({
                ...data,
                password: val,
                check_textInputPasswordChange:  false,
                passwordLength: val.length
            })
        }
    }

    const toggleSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if(val.trim().length >= 6){
            setData({
                ...data,
                isValidUser: true
            })
        }
        else{
            setData({
                ...data,
                isValidUser: false
            })
        }
    }

    const handleValidPassword = (val) => {
        if(val.trim().length >= 8){
            setData({
                ...data,
                isValidPassword: true
            })
        }
        else{
            setData({
                ...data,
                isValidPassword: false
            })
        }
    }

    const checkData = () => {
        var userLen = data.usernameLength;
        var passwordLen = data.passwordLength;
        if(userLen < 6 && passwordLen < 8){
            setData({
                ...data,
                isValidUser: false,
                isValidPassword: false
            })
        }
        else if(userLen < 6 && passwordLen >= 8){
            setData({
                ...data,
                isValidUser: false,
                isValidPassword: true
            })
        }
        else if(userLen >= 6 && passwordLen  < 8){
            setData({
                ...data,
                isValidUser: true,
                isValidPassword: false
            })
        }
        else {
            setData({
                ...data,
                isValidUser: true,
                isValidPassword: true
            })
            onSignIn();
        }
    }
    
    function onSignIn(){
        const {username} = data;
        const {password} = data;
        console.log(username,password);
        console.log(login_URL);
        fetch(login_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username,password})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const {user,fail} = data;
            if(fail == 'LOGIN_FAIL'){
                ToastAndroid.show("Tên đăng nhập hoặc mật khẩu không chính xác!",ToastAndroid.SHORT);
            }
            else{
                global.onSignIn = user;
                console.log(user);
                return signIn();
            }

        })
        .catch(err => console.log(err))

    }

    const eye = <Feather name='eye' size={25} color='grey' />
    const eye_off = <Feather name='eye-off' size={25} color='grey' />

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>

            <View style={styles.footer} >
                <Text style={styles.text_footer}>Tên đăng nhập</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons
                        name="account-outline"
                        size={30}
                    />
                    <TextInput 
                        placeholder="Vui lòng nhập tên tài khoản"
                        style={styles.textInput}
                        onChangeText={(val) => textInputChange(val)}
                        blurOnSubmit={false}
                        onEndEditing={e => handleValidUser(e.nativeEvent.text)}
                        autoCapitalize='none'
                    />

                    { data.check_textInputChange ? 
                    <MaterialCommunityIcons
                        name='check-circle'
                        size={30}
                        color='green'
                    />
                    : null }
                    
                </View>
                {data.isValidUser ? null : 
                    <Text style={styles.errorMsg}>Tên đăng nhập phải chứa ít nhất 6 ký tự</Text>
                }
                <Text style={[styles.text_footer,{marginTop: 30}]}>Mật khẩu</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons
                        name="lock-outline"
                        size={30}
                    />
                    <TextInput 
                        placeholder="Vui lòng nhập mật khẩu"
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                        blurOnSubmit={false}
                        returnKeyType='done'
                        autoCapitalize='none'
                        onEndEditing={e => handleValidPassword(e.nativeEvent.text)}
                    />
                    <TouchableOpacity onPress={toggleSecureTextEntry}>
                        {data.check_textInputPasswordChange ? 
                        data.secureTextEntry ? eye : eye_off  : null}
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null : 
                    <Text style={styles.errorMsg}>Mật khẩu phải chứa ít nhất 8 ký tự</Text>
                }

                <View style={styles.button}>
                    <TouchableOpacity 
                        style={[styles.signIn,{backgroundColor:'#01ab9d'}]}
                        onPress={()=>{checkData()}}
                    >
                        <Text style={styles.textSign}>Đăng Nhập</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn,{
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 10,
                        }]}    
                    >
                            <Text style={[styles.textSign,{color:'#01ab9d'}]}>Đăng Ký Ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
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