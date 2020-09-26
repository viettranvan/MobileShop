// import React, {Component} from 'react';
// import {View,  Text, Button, StyleSheet, TouchableOpacity, Linking} from 'react-native';
// import { TextInput } from 'react-native-paper';
// import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'


// export default class Support extends Component{
//     render(){
//         const {navigation } = this.props;
//         return(
//             <View style={{flex:1}}>
//                 <View style={styles.header}>
//                     <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
//                         <MaterialCommunityIcons name='backburger' size={40} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
//                         <MaterialCommunityIcons name='home-outline' size={40} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
//                         <MaterialCommunityIcons name='cart' size={40} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
//                         <MaterialCommunityIcons name='magnify' size={40} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
//                         <MaterialCommunityIcons name='account-outline' size={40} />
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.training}>
//                     <Text style={{fontSize: 20}}>Xem hướng dẫn chi tiết về ứng dung</Text>
//                     <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://google.com')}}>
//                         <Text style={styles.openLink}>Hướng dẫn sử dụng</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.contactContainer}>
                    
                    
//                     <Text style={{fontSize: 20, marginRight: 20, marginLeft:20}}>Mọi thắc mắc về ứng dụng xin vui lòng liên hệ qua:</Text>
//                     <View style={styles.contact}>
//                         <MaterialCommunityIcons
//                             name='gmail'
//                             color='red'
//                             size={50}
//                         />
//                             <Text> : </Text>
//                         <TouchableOpacity onPress={() => Linking.openURL('mailto:viettranvan2k@example.com')} >
//                             <Text style={styles.email}>Nhấn để mở</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.contact}>
//                         <MaterialCommunityIcons
//                             name='phone'
//                             color='green'
//                             size={50}
//                         />
//                             <Text> : </Text>
//                         <TouchableOpacity onPress={() => Linking.openURL(`tel:0394848858`)}>
//                             <Text style={styles.email}>Nhấn để mở</Text>
//                         </TouchableOpacity>
//                     </View>
                    
//                     <View style={styles.contact}>
//                         <MaterialCommunityIcons
//                             name='android-messages'
//                             color='blur'
//                             size={50}
//                         />
//                             <Text> : </Text>
//                         <TouchableOpacity onPress={() => Linking.openURL('sms:0394848858')}>
//                             <Text style={styles.email}>Nhấn để mở</Text>
//                         </TouchableOpacity>
//                     </View>                    
//                 </View>
//             </View>

//         );
//     }
// }

// const styles = StyleSheet.create({
//     header:{
//         backgroundColor: '#92bff0',
//         flexDirection: 'row',
//         justifyContent: 'space-evenly'
//     },
//     training:{
//         margin:15,
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     contactContainer:{
//         justifyContent:'center',
//         alignContent: 'center',
//         alignItems: 'center',
//     },
//     button: {
//         paddingTop: 10,
//         paddingBottom: 10
//     },
    // openLink: {
    //     color: 'blue',
    //     textDecorationLine: 'underline',
    //     fontSize: 20
    // },
//     email: {
//         fontSize: 14,
//         color:'blue',
//         textDecorationLine:'underline'
//     },
//     contact: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around'
//     }
// });

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,Linking } from 'react-native';
import map from '../Image/bannerDienThoai.jpg';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Contact extends Component {
    render() {
        const {navigation } = this.props;
        
        return (
            <View style={styles.wrapper}>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name='backburger' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                            <MaterialCommunityIcons name='home-outline' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
                            <MaterialCommunityIcons name='cart' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                            <MaterialCommunityIcons name='magnify' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                            <MaterialCommunityIcons name='account-outline' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.training}>
                    <Text style={{fontSize: 20}}>Xem hướng dẫn chi tiết về ứng dung</Text>
                    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://google.com')}}>
                        <Text style={styles.openLink}>Hướng dẫn sử dụng</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.infoContainer}>
                    <Text style={{fontSize: 20, textAlign: 'center',fontStyle: 'italic'}}>Liên hệ với chúng tôi</Text>
                    <View style={styles.rowInfoContainer}>
                        <MaterialCommunityIcons name='map-marker-radius' size={50} />
                        <View style={{flex:1}}>
                            <Text style={styles.infoText} numberOfLines={2}>280 An Dương Vương, Phường 4, Quận 5, Tp. HCM</Text>
                        </View>
                    </View>
                    <View style={styles.rowInfoContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:0394848858`)}>
                            <MaterialCommunityIcons name='phone' color='green' size={50} />
                        </TouchableOpacity>    
                        <Text style={styles.infoText}>(+84) 0394848858</Text>
                    </View>
                    <View style={styles.rowInfoContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:viettranvan2k@example.com')} >
                            <MaterialCommunityIcons name='gmail' color='red' size={50} />
                        </TouchableOpacity>
                        <Text style={styles.infoText}>viettranvan2k@gmail.com</Text>
                    </View>
                    <View style={[styles.rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <TouchableOpacity onPress={() => Linking.openURL('sms:0394848858')}>
                            <MaterialCommunityIcons name='android-messages' color='blur' size={50} />
                        </TouchableOpacity>
                        <Text style={styles.infoText}>(+84) 0394848858</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { 
        flex: 1, 
    },
    infoContainer: {
        padding: 10,
        backgroundColor: '#FFF',
        margin: 15,
        marginTop: 0,
        borderRadius: 2,
    },
    rowInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        color: '#AE005E',
        fontWeight: '500',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10
    },
    header:{
        backgroundColor: '#92bff0',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    training:{
        backgroundColor: '#f0f0ed',
        margin:15,
        justifyContent:'center',
        alignItems:'center'
    },
    openLink: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 20
    },
});

export default Contact;

                