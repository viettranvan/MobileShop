import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import { Avatar } from 'react-native-paper'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import avatar from '../../Image/avartar.jpg';
import global from '../../global';

function formatBirthday(birthday){
    var year = birthday.slice(0,4);
    var month = birthday.slice(5,7);
    var day = birthday.slice(8,10);
    var result = day + '-' + month + '-' + year;
    return result;
}
export default class Profile extends Component{
    render(){
        const user = global.onSignIn;
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer() }>
                        <MaterialCommunityIcons name="menu-open" color='white' size={40} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Thông tin cá nhân</Text>
                    <View style={{paddingRight:15}}/>
                </View>
                <Button
                    title='log'
                    onPress={()=> console.log(user)}
                />
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
                                <Text style={{ color: '#2ABB9C' }}>{user.fullname}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tên đăng nhập:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{user.username}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Ngày sinh:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{formatBirthday(user.birthday)}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Giới tính:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{user.gender}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Số điện thoại:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{user.phone_number}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold'}}>Địa chỉ:</Text>
                                <Text style={{ color: '#2ABB9C', marginLeft:30 }}>{user.address}</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{margin:5}}>
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
        marginBottom: 30,
        margin:5
    },
    profile: {
        backgroundColor: "#FFF",
        // margin: 3,
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        borderBottomWidth: 1,
        borderColor: '#b8bfbd',
    },
    changeInfo: {
        borderRadius: 2,
        padding: 10,
        alignItems: 'center'
    },

});
