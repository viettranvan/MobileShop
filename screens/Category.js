import React, {Component} from 'react';
import {View,  Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

// import Iphone from '../../Image/Iphone-11-pro-max.jpg';
// import SamSung from '../../Image/Samsung-Galaxy-S20-color-render-leak.jpg';
// import Oppo from '../../Image/oppo-a11x_800x450.jpg';

import Iphone from '../Image/Iphone-11-pro-max.jpg';
import SamSung from '../Image/Samsung-Galaxy-S20-color-render-leak.jpg';
import Oppo from '../Image/oppo-a11x_800x450.jpg';

const {width,height} = Dimensions.get("window");

export default class Category extends Component{
    gotoListCategory(){
        const {navigation} = this.props;
        console.log(this.props);
        // navigation.navigate("ListCategory");
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={{flex: 1,justifyContent: 'center'}}>
                    <Text style={styles.textStyle}>Category</Text>
                </View>
                <View style={{flex:6}}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        <TouchableOpacity onPress={() => {console.log(this.props)}}>
                            <Image style={styles.imageStyle}source={Iphone}>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.gotoListProduct()}>
                            <Image style={styles.imageStyle}source={SamSung}>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.gotoListProduct()}>
                            <Image style={styles.imageStyle}source={Oppo}/>
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth/800)*450;
const styles = StyleSheet.create({
    wrapper: {
        height : height*0.3 ,
        backgroundColor: 'white',
        margin: 10,
        padding: 10
    },
    textStyle:  {
        fontSize:  24,
        fontWeight: "bold",
        color: '#706d62',
        fontStyle: 'italic'
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight
    }
});
  