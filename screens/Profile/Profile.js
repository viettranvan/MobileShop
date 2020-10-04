import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
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

    constructor(props){
        super(props);
        const user = global.onSignIn;
        this.state = {
            user: user,
            fullname: user.fullname,
            username: user.username,
            birthday: user.birthday,
            gender: user.gender,
            phone_number: user.phone_number,
            address: user.address
        }
    }

    render(){
        const {user,fullname,username,birthday,gender,phone_number,address} = this.state;
        const users = this.props.route.params;
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
                                <Text style={{ color: '#2ABB9C' }}>{users == null ? fullname : users.user.fullname}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tên đăng nhập:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{username}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Ngày sinh:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{formatBirthday(users == null ? birthday : users.user.birthday)}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Giới tính:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{users == null ? gender : users.user.gender}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Số điện thoại:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{users == null ? phone_number : users.user.phone_number}</Text>
                            </View>
                        </View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold'}}>Địa chỉ:</Text>
                                <Text style={{ color: '#2ABB9C', marginLeft:30 }}>{users == null ? address : users.user.address}</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{margin:5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeInfo',{user:user})}>
                            <View style={styles.profile}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Chỉnh sửa thông tin</Text>
                                    {/* <Text style={{ color: '#2ABB9C' }}> ) </Text> */}
                                    <MaterialCommunityIcons name='chevron-right' size={16}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword',{user:user})}>
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

const styles = StyleSheet.create({
    wrapper: { 
        flex: 1, 
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
