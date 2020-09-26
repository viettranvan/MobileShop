import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput} from "react-native";
import { Avatar } from 'react-native-paper'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


var genders = [
    {label: "Nam", value: 0},
    {label: "Nữ", value: 1},
];


export default class ChangeInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            date:"01-01-1990"
        }
    }
    render(){
        const email = 'viettranvan2k@gmail.com';
        var hoten = 'Trần Văn Việt';

        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                        <MaterialCommunityIcons name="arrow-left" color='white' size={40} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Chỉnh sửa thông tin</Text>
                    <View style={{paddingRight:15}}/>
                </View>

                <View style={styles.body}>
                    <View style={styles.changeInfoContainer}>
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
                    </View>

                    <TouchableOpacity 
                        onPress={() => {}}
                        style={styles.upDate}>
                            <Text style={styles.textUpdate}>Cập Nhật</Text>
                    </TouchableOpacity>
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
});
