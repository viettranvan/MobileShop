import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import { Avatar } from 'react-native-paper'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import avatar from '../../Image/avartar.jpg';

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer() }>
                        <MaterialCommunityIcons name="menu-open" color='white' size={40} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Thông tin cá nhân</Text>
                    <View style={{paddingRight:15}}/>
                </View>

                <View style={styles.body}>
                    <Avatar.Image
                        source={avatar}
                        size= {80}
                        style={styles.avatar}
                    />

                    <View style={styles.profileContainer}> 
                        
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Họ Tên:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Trần Văn Việt</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>email:</Text>
                                <Text style={{ color: '#2ABB9C' }}>viettranvan2k@gmail.com</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Ngày sinh:</Text>
                                <Text style={{ color: '#2ABB9C' }}>02-10-2000</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Giới tính:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Nam</Text>
                            </View>
                        </View>
                    </View>
                    

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeInfo')}>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold' }}>Chỉnh sửa thông tin</Text>
                                {/* <Text style={{ color: '#2ABB9C' }}> ) </Text> */}
                                <MaterialCommunityIcons name='chevron-right' size={16}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword')}>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold' }}>Thay đổi mật khẩu</Text>
                                {/* <Text style={{ color: '#2ABB9C' }}> ) </Text> */}
                                <MaterialCommunityIcons name='chevron-right' size={16}/>
                            </View>
                        </View>
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
    avatar: {
        alignSelf:'center',
        marginTop: 10,
        marginBottom: 10
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
    profileContainer:{
        marginBottom: 30
    },
    profile: {
        backgroundColor: "#FFF",
        // margin: 3,
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        borderBottomWidth: 1,
        borderColor: '#b8bfbd'
    },
    changeInfo: {
        borderRadius: 2,
        padding: 10,
        alignItems: 'center'
    },

});
