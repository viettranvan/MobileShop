import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUp = ({navigation}) => {

    const [data, setData] = React.useState({
        fullname: '',
        username: '',
        password: '',
        confirm_password: '',
        check_textInputFullnameChange: false,
        check_textInputChange: false,
        check_textInputPasswordChange: false,
        check_textInputRepassChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputFullnameChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputFullnameChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputFullnameChange: false
            });
        }
    }

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
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

    const handleConfirmPasswordChange = (val) => {
        if(val.length !== 0 ){
            setData({
                ...data,
                confirm_password: val,
                check_textInputRepassChange:  true,
            });
        }
        else{
            setData({
                ...data,
                confirm_password: val,
                check_textInputRepassChange:  false,
            });
        }
    }

    const toggleSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const eye = <Feather name="eye" color="grey" size={25} />
    const eye_off = <Feather name='eye-off' size={25} color='grey' />

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Đăng ký ngay!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            {/* Tên đăng nhập - email */}
            <Text style={styles.text_footer}>Họ và tên</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Vui lòng nhập họ tên của bạn"
                    style={styles.textInput}
                    autoCapitalize="done"
                    onChangeText={(val) => textInputFullnameChange(val)}
                    blurOnSubmit={false}
                />
                {data.check_textInputFullnameChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            {/* End Tên đăng nhập - email */}
            
            {/* Tên đăng nhập - email */}
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Tên đăng nhập</Text>

            <View style={styles.action}>
                <MaterialCommunityIcons 
                    name='account-outline'
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Vui lòng nhập tài khoản"
                    style={styles.textInput}
                    autoCapitalize="done"
                    onChangeText={(val) => textInputChange(val)}
                    blurOnSubmit={false}

                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            {/* End Tên đăng nhập - email */}

            {/* Mật khẩu */}
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Mật khẩu</Text>

            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Vui lòng nhập mật khẩu"            
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    blurOnSubmit={false}

                />
                <TouchableOpacity onPress={toggleSecureTextEntry}>
                    {data.check_textInputPasswordChange ? 
                    data.secureTextEntry ? eye : eye_off  : null}
                </TouchableOpacity>
            </View>
            {/*End Mật khẩu */}

            {/* Nhập lại mật khẩu */}
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Xác nhận mật khẩu</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Xác nhận mật khẩu của bạn"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                    blurOnSubmit={false}
                    
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.check_textInputRepassChange ? 
                    data.confirm_secureTextEntry ? eye : eye_off  : null}
                </TouchableOpacity>
            </View>
            {/*End Nhập lại mật khẩu */}

            {/* Button đăng ký - đăng nhập*/}
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Đăng ký</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            {/*End Button đăng ký - đăng nhập*/}
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUp;

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
        flex: Platform.OS === 'ios' ? 3 : 5,
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
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
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });

   {/* Điều khoản */}
            {/* <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View> */}
            {/*End Điều khoản */}