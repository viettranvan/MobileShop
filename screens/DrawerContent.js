import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import avatar from '../Image/avartar.jpg';

export default function DrawerContent(props){
    const  [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
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
                                <Title style={styles.title}>Củ Chuối</Title>
                                <Caption style={styles.caption}>Bé xíu</Caption>
                            </View>
                        </View>
                        {/* end avarar */}

                        {/* theo dõi đăng ký */}
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>80</Paragraph>
                                <Caption style={styles.caption}> thoe dỗi</Caption>    
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>100</Paragraph>
                                <Caption style={styles.caption}> Đăng ký</Caption>    
                            </View>
                        </View>
                        {/* end theo dõi đăng ký */}
                    </View>
                    {/* end User */}

                    {/* danh sách màn hình */}
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label="Trang chính"
                            onPress={() => {props.navigation.navigate("Main")}}
                        />
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label="profile"
                            onPress={() => {props.navigation.navigate("Profile")}}
                        />
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon
                                    name="bookmark-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon
                                    name="settings-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label="Setting"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={ ({color, size}) => (
                                <Icon
                                    name="account-check-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate("Support")}}
                        />
                    </Drawer.Section>
                    {/* end danh sách màn hình */}
                    
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={ () =>  {toggleTheme()} } >
                            <View style={styles.preference}>
                                <Text>Drak Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
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
                        <Icon
                            name="exit-to-app"
                            color = {color}
                            size = {size}
                        />
                    )}
                    label="Đăng xuất"
                    onPress={() => {}}
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