import React, {Component} from 'react';
import {View,  Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import urls from '../../urls';

const URL_imagesProduct = urls[2].url;
const product_detail_URL = urls[3].url;

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
    renderProduct(product){
        return(
            <View style={styles.body}>
                <View >
                    <TouchableOpacity 
                        style={styles.productContainer} 
                        onPress={()=> this.gotoDetail(product.id_product)} 
                    >
                        <Image 
                            style={styles.productImage}
                            source={{uri: URL_imagesProduct + product.productImage[0]}} 
                        />
                        <Text style={styles.productName} > {product.name} </Text>
                        <Text style={styles.productDescription} > {product.small_description} </Text>
                        <Text style={styles.productPrice}> {formatPrice(product.price)} 
                            <Text style={{fontSize:14}}> vnd</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 10, width: width}}/>
            </View>
        );
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
        const {topProduct} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Sản phẩm thịnh hành</Text>
                </View>

                <FlatList
                    horizontal={false}
                    numColumns={2}
                    data={topProduct} // array muốn render
                    renderItem={({ item }) => this.renderProduct(item)}
                    keyExtractor={(item) => item.id_product}
                />
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
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        flex:1
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
    },
    droidSafeArea: {
        flex: 1,
        backgroundColor: 'blue',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});