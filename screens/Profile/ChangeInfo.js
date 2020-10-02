import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput} from "react-native";
import { Avatar } from 'react-native-paper'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import global from '../../global';


var genders = [
    {label: "Nam", value: 0},
    {label: "Nữ", value: 1},
];


function formatBirthday(birthday){
    var year = birthday.slice(0,4);
    var month = birthday.slice(5,7);
    var day = birthday.slice(8,10);
    var result = day + '-' + month + '-' + year;
    return result;
}
export default class ChangeInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: global.onSignIn,
            fullname: '',
            birthday: '',
            address: '',
            phone_number: '',
            gender: ''
        }
    }
    render(){
        const {user} = this.state;
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                        <MaterialCommunityIcons name="arrow-left" color='white' size={40} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Chỉnh sửa thông tin</Text>
                    <View style={{paddingRight:15}}/>
                </View>
                <Button
                    title='Log'
                    onPress={() => console.log(this.state)}
                />
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
                                    defaultValue={user ? user.fullname : ''}
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
                                        date={user ? formatBirthday(user.birthday) : ''} //initial date from state
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
                                        onDateChange={(birthday) => {this.setState({birthday: birthday})}}
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
                                    defaultValue={ user ? user.phone_number : ''}
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
                                    defaultValue={user ? user.address : ''}
                                />
                            </View>
                            {/* end địa chỉ */}

                            {/* giới tính */}
                            <Text style={[styles.text_footer, {marginTop: 35}]}>Giới tính</Text>
                            <View style={styles.action} value={1}>
                                <RadioForm
                                    radio_props={genders}
                                    // initial={this.state.gender}
                                    // onPress={(value) =>{this.setState({gender:value})}}
                                />
                            </View>
                            {/* end giới tính */}
                            </ScrollView>
                    </View>
                    <View style={{margin:10}}>
                        <TouchableOpacity 
                            onPress={() => {}}
                            style={styles.upDate}>
                                <Text style={styles.textUpdate}>Cập Nhật</Text>
                        </TouchableOpacity>
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
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
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
{/* <View style={styles.changeInfoContainer}>
                        <View style={{margin:5}}>
                            <Text style={styles.text_footer}>Họ và tên</Text>
                            <View style={styles.action}>
                                <TextInput
                                    style={styles.textInput}
                                    value={hoten}
                                />
                            </View>
                        </View>

                        <View style={{margin:5}}>
                            <Text style={styles.text_footer}>Email</Text>
                            <View style={styles.action}>
                                <TextInput
                                    style={[styles.textInput, {color:'#969696'}] }
                                    editable = {false}
                                    value = {email}
                                />
                            </View>
                        </View>

                        <View style={{margin:5}}>
                            <Text style={styles.text_footer}>Ngày sinh</Text>
                            <View style={styles.action}>
                            <DatePicker
                                style={{width: 200}}
                                date={this.state.date} //initial date from state
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
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                            </View>
                        </View>

                        <View style={{margin:5}}>
                            <Text style={styles.text_footer}>Giới tính</Text>
                            <View style={styles.action}>
                                <RadioForm
                                    radio_props={genders}
                                    onPress={(value) => {}}
                                />
                            </View>
                        </View>
                    </View> */}