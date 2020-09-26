import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput} from "react-native";
import { Avatar } from 'react-native-paper'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { color } from "react-native-reanimated";



export default class ChangeInfo extends Component{
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

                <View style={{flex:10}}>
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
                            <TextInput
                                style={styles.textInput}
                                placeholder="Vui lòng nhập họ tên của bạn"
                                editable = {false}
                            />
                        </View>
                    </View>

                    <View style={{margin:5}}>
                        <Text style={styles.text_footer}>Giới tính</Text>
                        <View style={styles.action}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Vui lòng nhập họ tên của bạn"
                                editable = {false}
                            />
                        </View>
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
});
