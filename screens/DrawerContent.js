import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import avatar from '../Image/main-logo.jpg';
import global from '../global';
import saveToken from '../api/js/saveToken';
import{ AuthContext } from '../components/context';

export default function DrawerContent(props){
    const PaperTheme = useTheme();
    const { signOut,toggleTheme } = React.useContext(AuthContext);
    function onSignOut(){
        global.onSignIn = null; 
        saveToken('');
        signOut();
    }
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {/* User */}
                    <View style={styles.userInfoSection}>
                        {/* Avatar */}
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={avatar}
                                size= {50}
                            />
                            <View style={{marginLeft: 15,flexDirection: 'column'}}>
                                <Title style={styles.title}>{global.onSignIn.fullname}</Title>
                                <Caption style={styles.caption}>{global.onSignIn.username}</Caption>
                            </View>
                        </View>
                        {/* end avarar */}
                    </View>
                    {/* end User */}

                    {/* danh sách màn hình */}
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon name="home-outline" color = {color} size = {size} />
                            )}
                            label="Trang chính"
                            onPress={() => {props.navigation.navigate("Main")}}
                        />
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon name="account-outline" color = {color} size = {size} />
                            )}
                            label="Thông tin cá nhân"
                            onPress={() => {props.navigation.navigate("Profile")}}
                        />
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon name="history" color = {color} size = {size} />
                            )}
                            label="Lịch sử mua hàng"
                            onPress={() => {props.navigation.navigate("OrderHistory")}}
                        />
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon name="account-check-outline" color = {color} size = {size} />
                            )}
                            label="Hỗ trợ"
                            onPress={() => {props.navigation.navigate("Support")}}
                        />
                    </Drawer.Section>
                    {/* end danh sách màn hình */}
                    
                    <Drawer.Section title="Theme">
                        <TouchableRipple onPress={ () =>  {toggleTheme()} } >
                            <View style={styles.preference}>
                                <Text>Dark theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={PaperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            {/* Dăng xuất */}
            <Drawer.Section style={styles.bottomDraerSection}>
                <DrawerItem
                    icon={ ({color, size}) => (
                        <Icon name="exit-to-app" color = {color} size = {size} />
                    )}
                    label="Đăng xuất"
                    onPress={() => {onSignOut() }}
                />
            </Drawer.Section>
            {/* end đăng xuất */}
        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
        flex  : 1
    },
    userInfoSection: {
        paddingLeft: 20,
        marginBottom: 50
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDraerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent : 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});