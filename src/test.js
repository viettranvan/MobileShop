import React, {Component} from 'react';
import {View,  Text,StyleSheet, Dimensions, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import anh from '../Image/realme3_800x450.jpg';
const {width,height} = Dimensions.get("window");

export default class Test extends Component{
    render(){
        return(
            <View>
                <Text>hdhnak</Text>
                <View>
                    <Swiper>
                        <Image source={anh}/>
                    </Swiper>
                </View>
            </View>
        );
    }
}