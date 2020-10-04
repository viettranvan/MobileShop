import React, {Component} from 'react';
import {View,  Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import urls from '../../urls';

const {width,height} = Dimensions.get("window");
const images_type_URL = urls[1].url;
const list_productURL = urls[11].url;

export default class Category extends Component{
    gotoListProduct(){
        fetch(list_productURL)
        .then(res => res.json())
        .then(data => {
            const {product} = data;
            this.props.navigation.navigate('ListProduct',{product: product});
        })
        
    }

    render(){
        const {types} = this.props;
        return(
            <View style={styles.wrapper}>
                <View style={{flex: 1,justifyContent: 'center'}}>
                    <Text style={styles.textStyle}>Danh mục sản phẩm</Text>
                </View>
                <View style={{flex:6}}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        {types.map( e => (
                            <TouchableOpacity onPress={() => this.gotoListProduct()} key={e.id_type}>
                                <Image 
                                    style={styles.imageStyle}
                                    source={{uri: images_type_URL + e.image}} // đổ dữ liệu trả về từ server vào swiper
                                />
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth/800)*400;
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
        height: imageHeight,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
});
  