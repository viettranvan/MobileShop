import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
export default class ChangeInfo extends Component{
   
    render(){
        const email = 'viettranvan2k@gmail.com';
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
                    <View style={styles.changePassContainer}>
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
                                style={[styles.textInput,{color:'#abaaa1'}]}
                                editable={false}
                                value={email}
                            />
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
                                style={styles.textInput}
                                autoCapitalize="none"
                                blurOnSubmit={false}

                            />
                            
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
                                style={styles.textInput}
                                autoCapitalize="none"
                                blurOnSubmit={false}
                            />
                        </View>
                        {/*End Nhập lại mật khẩu */}

                        {/* Button đổi mật khẩu*/}
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
                                    }]}>Đổi mật khẩu</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        {/*End Button đăng ký - đăng nhập*/}
                    </View>
                    
                </View>

                
            </View>
        );
    }
}


const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    wrapper: { 
        flex: 1, 
        // backgroundColor: "#fff" 
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
  
    
});
