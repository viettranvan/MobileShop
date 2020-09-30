import React, {Component} from 'react';
import {View,  Text, StyleSheet, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const URL_topProduct = 'http://192.168.2.105:8888/api/images/product/';
const product_detail_URL = 'http://192.168.2.105:8888/api/';

// format giá theo định dạng có dấu phẩy
function formatPrice(price){
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
export default class Test extends Component{
    constructor(){
        super();
        this.state = {
            productDetail:[]
        }
    }
    gotoDetail(id){
        fetch(product_detail_URL+"product_detail.php?id="+id)
        .then(res => res.json())
        .then(data => {
            const {product_detail} = data;
            this.props.navigation.navigate('Detail',{ 
                product_detail: product_detail
            })
        })
    }
    render(){
        const {topProduct} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>top Product</Text>
                </View>
                <View style={styles.body}>
                    {topProduct.map( e => (
                        <View key={e.id_product}>
                            <TouchableOpacity 
                                style={styles.productContainer} 
                                onPress={()=> this.gotoDetail(e.id_product)} 
                                key={e.id_product}
                            >
                                <Image 
                                    style={styles.productImage}
                                    source={{uri: URL_topProduct + e.productImage[0]}} 
                                />
                                <Text style={styles.productName} > {e.name} </Text>
                                <Text style={styles.productDescription} > {e.small_description} </Text>
                                <Text style={styles.productPrice} > {formatPrice(e.price)} 
                                    <Text style={{fontSize:14}}> vnd</Text>
                                </Text>
                            </TouchableOpacity>
                            <View style={{height:10,backgroundColor:'#fff'}}/>
                        </View>
                    ))}
                    <View style={{height: 10, width: width}}/>
                </View>
            </View>
        );
    }
}

const {width,height} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth /500)*500;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      margin: 10
    },
    titleContainer: {
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        fontSize:  24,
        fontWeight: "bold",
        color: '#706d62',
        fontStyle: 'italic'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',

    },
    productContainer: {
        width: productWidth,
        paddingBottom: 10,
        backgroundColor: '#faf7f5',
        padding: 10
    },
    productImage: {
        width: productWidth - 20,
        height: productHeight,
    },
    productName: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    productDescription: {
        fontStyle:'italic',
        fontSize: 10
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
});