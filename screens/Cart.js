import React, {Component} from 'react';
import {View,  Text, Button, Image} from 'react-native';
import { useTheme } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

// export default class Cart extends Component{
//     render(){
//         // const { colors } =useTheme();
//         return(
//             <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
//                 <Text>Cart screen</Text>
//                 <Button
//                     title="go to detail"
//                     onPress={() => this.props.navigation.navigate("Detail")}
//                 />
                
//             </View>
//         );
//     }
// }

const Cart = () => {
    const { colors } =useTheme();
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
            <Text style={{color: colors.text}}>Cart screen</Text>
            <Button
                title="go to detail"
                onPress={() => this.props.navigation.navigate("Detail")}
            />
            
        </View>
    );
}

export default Cart;