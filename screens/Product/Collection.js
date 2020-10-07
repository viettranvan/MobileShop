import React, {Component} from 'react';
import {View,  Text,StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import mobileBanner from '../../Image/bannerDienThoai.jpg';
import urls from '../../urls';
const {width,height} = Dimensions.get("window");
const list_productURL = urls[11].url;
export default class Collection extends Component{

    gotoListProduct(){
        fetch(list_productURL)
        .then(res => res.json())
        .then(data => {
            const {product} = data;
            this.props.navigation.navigate('ListProduct',{product: product});
        })
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={{flex: 1,justifyContent: 'center'}}>
                    <Text style={styles.textStyle}>Danh mục sản phẩm</Text>
                </View>
                <View style={{flex:6}}>
                    <TouchableOpacity onPress={() => this.gotoListProduct()}>
                        <Image style={styles.imageStyle}source={mobileBanner}/>
                    </TouchableOpacity>
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
  