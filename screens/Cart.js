import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet, Image,Button,  FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import global from '../global';
import urls from '../urls';

import sp1 from '../Image/oppo-a11x_800x450.jpg';
const URL_imagesProduct = urls[2].url;

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
// format giá theo định dạng có dấu phẩy
function formatPrice(price){
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
const product_detail_URL = urls[3].url;

class Cart extends Component{

    constructor(){
        super();
        this.state = {
            numOfProduct: 1,
        }
    }
    
    reduceProduct(){
        if(this.state.numOfProduct > 1){
            this.setState({numOfProduct: this.state.numOfProduct - 1})
        }
    }

    increaseProduct(){
        this.setState({numOfProduct: this.state.numOfProduct + 1})
    }

    renderProduct(product){
        
        return(
            <View style={styles.product}>
                <Image 
                    source={{uri: URL_imagesProduct + product.productImage[0]}} 
                    style={styles.productImage} 
                />
                <View style={styles.mainRight}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={styles.txtName}>{product.name}</Text>
                        <TouchableOpacity>
                            <Text style={{  color: '#969696' }}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.txtSmallDescription}>{product.small_description} vnd</Text>
                    <Text style={styles.txtPrice}>{formatPrice(product.price)} vnd</Text>
                    <View style={styles.productController}>
                        <View style={styles.numberOfProduct}>
                            <TouchableOpacity style={styles.border} onPress={() => this.reduceProduct()}>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:20}}>{this.state.numOfProduct}</Text>
                            <TouchableOpacity style={styles.border} onPress={() => this.increaseProduct()}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.showDetailContainer} onPress={()=> this.gotoDetail(product.id_product)}>
                            <Text style={styles.txtShowDetail}>Chi tiết</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    totalPrice(){
        const {cartArray} = this.props;
        var kq = 0;
        cartArray.map(e => {
            kq += parseFloat(e.price) ;
        })
        return kq;
    }

    gotoDetail(id){
        fetch(product_detail_URL+"?id="+id)
        .then(res => res.json())
        .then(data => {
            const {product_detail} = data;
            this.props.navigation.navigate('Detail',{ 
                product_detail: product_detail
            })
        })
    }

    render(){
        const {cartArray} = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer() }>
                        <MaterialCommunityIcons name="menu-open" color='white' size={40} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Giỏ hàng</Text>
                    <View style={{paddingRight:15}}/>
                </View>

                <View style={{flex:10}}>
                    <FlatList
                        data={cartArray} // array muốn render
                        renderItem={({ item }) => this.renderProduct(item)}
                        keyExtractor={(item) => item.id_product}
                    />
                    <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={styles.checkoutTitle}>TỔNG 
                        <Text style={{color:'#c70c0c', fontSize: 16}}> {formatPrice(this.totalPrice())} </Text>
                        vnd THANH TOÁN NGAY </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Cart;

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
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
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtSmallDescription:{
        paddingLeft: 20,
        fontStyle:'italic',
        fontSize: 10
    },
    txtPrice: {
        paddingLeft: 20,
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtShowDetail: {
        color: 'blue',
        fontSize: 18,
        textAlign: 'right',
        fontStyle: 'italic'

    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    border: {
        borderWidth: 0.5,
        height: 20,
        width: 20,
        justifyContent:'center',
        alignSelf: 'center',
        alignItems:  'center'
    }
});
