import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, StyleSheet, ScrollView, StatusBar,Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioForm from 'react-native-simple-radio-button';
import urls from '../../urls';

var genders = [
    {label: "Nam", value: 0},
    {label: "Nữ", value: 1},
];

const register_URL = urls[4].url;

const SignUp = ({navigation}) => {

    const [data, setData] = React.useState({
        fullname: '',
        username: '',
        password: '',
        confirm_password: '',
        address: '',
        phoneNumber: '',
        gender: 0,
        check_textInputFullnameChange: false,
        check_textInputChange: false,
        check_textInputPasswordChange: false,
        check_textInputRepassChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        usernameLength: 0,
        passwordLength: 0,
        birthday:"01-01-1990"
    });

    const textInputFullnameChange = (val) => {
        setData({
            ...data,
            fullname: val
        })
    }

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

    const textInputAddressChange = (val) => {
        setData({
            ...data,
            address: val
        })
    }

    const textInputPhoneNumberChange = (val) => {
        setData({
            ...data,
            phoneNumber: val
        })
    }

    function SignUpNow(){
        var {username} = data;
        var {password} = data;
        var {confirm_password} = data;
        var {fullname} = data;
        var {birthday} = data;
        var {address} = data;
        var {phoneNumber} = data;
        var {gender} = data;

        fetch(register_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username,password,confirm_password,fullname,birthday,address,phoneNumber,gender})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message == 'FAIL'){
                ToastAndroid.show("Vui lòng điền đầy đủ thông tin",ToastAndroid.SHORT);
            }
            else if(data.message == 'CONFIRM_PASSWORD_FAIL'){
                ToastAndroid.show("Mật khẩu không trùng khớp",ToastAndroid.SHORT);
            }
            else if(data.message == 'SUCCESS'){
                ToastAndroid.show("Đăng ký tài khoản thành công",ToastAndroid.SHORT);
                Alert.alert(
                    'Thông báo',
                    'Đăng Nhập Ngay ?',
                    [
                        { text: 'Không', style: 'cancel' },
                        { text: 'Có', onPress: () => navigation.navigate('SignInScreen') }
                    ]
                );
            }
            else if(data.message == 'ACCOUNT_ALREADY_EXISTS'){
                ToastAndroid.show("Tài khoản đã tồn tại",ToastAndroid.SHORT);
            }
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
        <View style={styles.footer}>
            <ScrollView>
            {/* Họ Và tên */}
            <Text style={styles.text_footer}>Họ và tên</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20}/>
                <TextInput 
                    placeholder="Vui lòng nhập họ tên của bạn"
                    style={styles.textInput}
                    onChangeText={(val) => textInputFullnameChange(val)}
                    blurOnSubmit={false}
                />
                {data.check_textInputFullnameChange ? 
                <View>
                    <Feather name="check-circle" color="green" size={20} />
                </View>
                : null}
            </View>
            {/* End Họ và tên */}
            
            {/* Tên đăng nhập - email */}
            <Text style={[styles.text_footer, {marginTop: 35}]}>Tên đăng nhập</Text>
            <View style={styles.action}>
                <MaterialCommunityIcons name='account-outline' color="#05375a" size={20}/>
                <TextInput 
                    placeholder="Vui lòng nhập tài khoản"
                    style={styles.textInput}
                    onChangeText={(val) => textInputChange(val)}
                    blurOnSubmit={false}
                    onEndEditing={e => handleValidUser(e.nativeEvent.text)}
                    autoCapitalize='none'
                />
                {data.check_textInputChange ? 
                <View>
                    <Feather name="check-circle" color="green" size={20}/>
                </View>
                : null}
            </View>
            {data.isValidUser ? null : 
                <Text style={styles.errorMsg}>Tên đăng nhập phải chứa ít nhất 6 ký tự</Text>
            }
            {/* End Tên đăng nhập - email */}

            {/* Mật khẩu */}
            <Text style={[styles.text_footer, {marginTop: 35}]}>Mật khẩu</Text>
            <View style={styles.action}>
                <Feather name="lock" color="#05375a" size={20} />
                <TextInput 
                    placeholder="Vui lòng nhập mật khẩu"            
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    onChangeText={(val) => handlePasswordChange(val)}
                    blurOnSubmit={false}
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
            {/*End Mật khẩu */}

            {/* Nhập lại mật khẩu */}
            <Text style={[styles.text_footer, { marginTop: 35}]}>Xác nhận mật khẩu</Text>
            <View style={styles.action}>
                <Feather name="lock" color="#05375a" size={20}/>
                <TextInput 
                    placeholder="Xác nhận mật khẩu của bạn"
                    autoCapitalize='none'
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                    blurOnSubmit={false}
                />
                <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                    {data.check_textInputRepassChange ? 
                    data.confirm_secureTextEntry ? eye : eye_off  : null}
                </TouchableOpacity>
            </View>
            {/*End Nhập lại mật khẩu */}

            {/* Ngày sinh */}
            <View style={{margin:5}}>
            <Text style={[styles.text_footer, {marginTop: 35}]}>Ngày sinh</Text>
                <View style={styles.action}>
                <DatePicker
                    style={{width: 200}}
                    date={data.birthday} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1900"
                    maxDate="01-01-2020"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                        },
                        dateInput: {
                        marginLeft: 36
                        }
                    }}
                    onDateChange={(birthday) => {setData({
                        ...data,
                        birthday: birthday
                    })}}
                />
                </View>
            </View>
            {/* End Ngày sinh */}

            {/* số đt */}
            <Text style={[styles.text_footer, {marginTop: 35}]}>Số điện thoại</Text>
            <View style={styles.action}>
                <MaterialCommunityIcons name='phone-in-talk' color="#05375a" size={20} />
                <TextInput 
                    placeholder="Vui lòng nhập số điện thoại"
                    style={styles.textInput}
                    keyboardType='numeric'
                    onChangeText={(val) => textInputPhoneNumberChange(val)}
                    blurOnSubmit={false}
                />
            </View>
            {/* end số đt */}

            {/* Địa chỉ */}
            <Text style={[styles.text_footer, { marginTop: 35}]}>Địa chỉ</Text>
            <View style={styles.action}>
                <MaterialCommunityIcons name='map-marker-radius' color="#05375a" size={20}/>
                <TextInput 
                    placeholder="Vui lòng nhập địa chỉ"
                    numberOfLines={2}
                    style={styles.textInput}
                    onChangeText={(val) => textInputAddressChange(val)}
                    blurOnSubmit={false}
                />
            </View>
            {/* end địa chỉ */}

            {/* giới tính */}
            <Text style={[styles.text_footer, { marginTop: 35}]}>Giới tính</Text>
            <View style={styles.action}>
                <RadioForm
                    radio_props={genders}
                    onPress={(value) => {setData({
                        ...data,
                        gender:value
                    })}}
                />
            </View>
            {/* end giới tính */}

            {/* Button đăng ký - đăng nhập*/}
            <View style={styles.button}>
                <TouchableOpacity 
                    style={[styles.signIn,{backgroundColor:'#01ab9d'}]}
                    onPress={() => SignUpNow()}
                >
                    <Text style={[styles.textSign, {color:'#fff'}]}>Đăng ký</Text>
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
        </View>
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
        flex: 6,
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
        marginTop: 0,
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
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
  });
  