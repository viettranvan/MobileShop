import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput,Alert, ToastAndroid} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import getToken from '../../api/js/getToken';
import DateTimePicker from '@react-native-community/datetimepicker';
import global from "../../global";
import urls from '../../urls';

var genders = [
    {label: "Nam", value: 0},
    {label: "Nữ", value: 1},
];

// YYYY-MM-DD -> DD-MM-YYYY
function formatBirthday(birthday){
    var year = birthday.slice(0,4);
    var month = birthday.slice(5,7);
    var day = birthday.slice(8,10);
    var result = day + '-' + month + '-' + year;
    return result;
}

// DD-MM-YYYY -> YYYY-MM-DD 
function formatBirthday2(birthday){
    var year = birthday.slice(6,10);
    var month = birthday.slice(3,5);
    var day = birthday.slice(0,2);
    var result = year + '-' + month + '-' + day;
    return result;
}
const change_infoURL = urls[9].url;

export default class ChangeInfo extends Component{

    constructor(props){
        super(props);
        const {user} =this.props.route.params;

        const fullname = user.fullname;
        const birthday = user.birthday;
        const address = user.address;
        const phone_number = user.phone_number;
        const gender = user.gender == 'Nam' ? 0 : 1;
        this.state = {
            fullname: fullname,
            birthday: birthday,
            address: address,
            phone_number: phone_number,
            gender: gender
        }
    }

    changeInfo(){
        const fullname = this.state.fullname;
        const birthday = formatBirthday(this.state.birthday);
        const address = this.state.address;
        const phone_number = this.state.phone_number;
        const gender = this.state.gender;
        getToken()
        .then(token => {
            fetch(change_infoURL,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ token, fullname, birthday, phone_number, address, gender })
            })
            .then(res => res.json())
            .then(user => {
                global.onSignIn = user;
                this.props.navigation.navigate('Profile', {user: user});
                ToastAndroid.show('Cập nhật thành công',ToastAndroid.SHORT);
            })
            .catch(err => console.log(err));    
        })
    }
    
    render(){
        const {fullname,birthday,address,phone_number,gender} = this.state;
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={ () =>  this.props.navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" color='white' size={40} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Chỉnh sửa thông tin</Text>
                    <View style={{paddingRight:15}}/>
                </View>
                    
                <View style={styles.body}>
                    <View style={styles.footer}>
                        <ScrollView>
                            {/* Họ Và tên */}
                            <Text style={styles.text_footer}>Họ và tên</Text>
                            <View style={styles.action}>
                                <FontAwesome name="user-o" color="#05375a" size={20} />
                                <TextInput 
                                    style={styles.textInput}
                                    blurOnSubmit={false}
                                    defaultValue={fullname}
                                    onChangeText={val => {this.setState({fullname : val})}}
                                />
                            </View>
                            {/* End Họ và tên */}
                            
                            {/* Ngày sinh */}
                            <View style={{margin:5}}>
                                <Text style={[styles.text_footer, {marginTop: 35}]}>Ngày sinh</Text>
                                <View style={styles.action}>
                                    <DatePicker
                                        style={{width: 200}}
                                        date={formatBirthday(birthday)} //initial date from state
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
                                        onDateChange={(birthday) => {this.setState({birthday: formatBirthday2(birthday)})}}
                                    />
                                </View>
                            </View>
                            {/* End Ngày sinh */}

                            {/* số đt */}
                            <Text style={[styles.text_footer, {marginTop: 35}]}>Số điện thoại</Text>
                            <View style={styles.action}>
                                <MaterialCommunityIcons name='phone-in-talk' color="#05375a" size={20} />
                                <TextInput 
                                    style={styles.textInput}
                                    keyboardType='numeric'
                                    onChangeText={(val) => {this.setState({phone_number: val})}}
                                    blurOnSubmit={false}
                                    defaultValue={ phone_number}
                                />
                            </View>
                            {/* end số đt */}

                            {/* Địa chỉ */}
                            <Text style={[styles.text_footer, { marginTop: 35}]}>Địa chỉ</Text>
                            <View style={styles.action}>
                                <MaterialCommunityIcons name='map-marker-radius' color="#05375a" size={20} />
                                <TextInput 
                                    numberOfLines={2}
                                    style={styles.textInput}
                                    onChangeText={(val) => {this.setState({address: val})}}
                                    blurOnSubmit={false}
                                    defaultValue={address}
                                />
                            </View>
                            {/* end địa chỉ */}

                            {/* giới tính */}
                            <Text style={[styles.text_footer, {marginTop: 35}]}>Giới tính</Text>
                            <View style={styles.action} >
                                <RadioForm
                                    radio_props={genders}
                                    initial={this.state.gender}
                                    onPress={(val) => this.setState({gender : val})}
                                />
                            </View>
                            {/* end giới tính */}
                            </ScrollView>
                    </View>
                    <View style={{margin:10}}>
                        <TouchableOpacity 
                            onPress={() => {this.changeInfo()}}
                            style={styles.upDate}>
                                <Text style={styles.textUpdate}>Cập Nhật</Text>
                        </TouchableOpacity>
                    </View>
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
    changeInfoContainer:{
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10
    },  
    text_footer: {
        color: '#05375a',
        fontSize: 18,
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
        color: '#171716',
        height: 40,
        backgroundColor: '#deded7'
    },
    upDate: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 10, 
        backgroundColor:'#5acc78'
    },
    textUpdate: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    footer: {
        flex: 6,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
        margin:5,
        borderRadius:5
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        color: '#05375a',
    },
});
