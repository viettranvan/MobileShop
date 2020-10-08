import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid, Dimensions, StyleSheet, Image,Button, FlatList,Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import global from '../global';
import urls from '../urls';
import getToken from '../api/js/getToken';

const URL_imagesProduct = urls[2].url;
const cartURL = urls[14].url;  

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
// format giá theo định dạng có dấu phẩy
function formatPrice(price){
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
const product_detail_URL = urls[3].url;
var n = 2;
class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            clearData: false,
            isEmptyPrice: false,
        }
    }
    
    onDelete(id){
        var {cartArray} = this.props;
        Alert.alert(
            'Thông báo',
            'Xác nhận xóa sản phẩm khỏi giỏ hàng ?',
            [
                { text: 'Không', style: 'cancel' },
                { text: 'Đồng ý', onPress: () => {
                    var n;
                    cartArray.map((e,index) => {
                        if(e.id_product == id){
                            n = index;
                            return n;
                        }
                    })
                    cartArray.splice(n,1);
                    this.props.navigation.navigate('Cart');
                    ToastAndroid.show("Xóa thành công",ToastAndroid.SHORT);
                }}
            ]
        );
    }

    renderProduct(product){
        return(
            <View style={styles.product}>
                <Image 
                    source={{uri: URL_imagesProduct + product.productImage[0]}} 
                    style={styles.productImage} 
                />
                <View style={styles.mainRight}>
                    <TouchableOpacity onPress={() => this.onDelete(product.id_product)} style={styles.deleteToCart}>
                        {/* Xóa khỏi giỏ hàng */}
                        <Text style={{  color: '#969696', fontSize:20,fontWeight:'bold' }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={styles.txtName}>{product.name}</Text>
                    </View>
                    <Text style={styles.txtSmallDescription}>{product.small_description} vnd</Text>
                    <Text style={styles.txtPrice}>{formatPrice(product.price)} vnd</Text>
                    
                    <View style={styles.productController}>
                        <TouchableOpacity style={styles.showDetailContainer} onPress={()=> this.gotoDetail(product.id_product)}>
                            <Text style={styles.txtShowDetail}>Chi tiết</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

    async onPayment(){
        

        try {
            const token = await getToken();
            const arrayDetail = this.props.cartArray.map((e,index) => ({
                id_product: e.id_product,
                quantity: 1
            }))
            const result = await fetch(cartURL,
            {   
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ token, arrayDetail })
            })
            .then(res => res.text())
            
            Alert.alert(
                'Thông báo',
                'Xác nhận xóa sản phẩm khỏi giỏ hàng ?',
                [
                    { text: 'Không', style: 'cancel' },
                    { text: 'Đồng ý', onPress: () => {
                        if(result === 'INSERT_SUCCESSFULLY'){
                            this.setState({clearData:true,isEmptyPrice:true});
                            global.cartArray = [];
                            ToastAndroid.show("Đặt hàng thành công", ToastAndroid.SHORT);
                        }
                        else{
                            console.log("Thêm thất bại");
                        }
                    }}
                ]
            );
            
        } catch (error) {
            console.log(error);
        }
    }

    totalPrice(){
        const {cartArray} = this.props;
        var kq = 0;
        cartArray.map(e => {
            kq += parseFloat(e.price) ;
        })
        return kq;
    }
    
    render(){
        var {cartArray} = this.props;
        const {clearData,data,isEmptyPrice} = this.state;
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
                {cartArray.length > 0 ? (
                    <FlatList
                        data={clearData ? data : cartArray} // array muốn render
                        renderItem={({ item }) => this.renderProduct(item)}
                        keyExtractor={(item) => item.id_product}
                    />
                ):(
                    <View style={{justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                        <Text>Giỏ hàng rỗng</Text>
                    </View>
                )}
                    
                    {cartArray.length > 0 ? (
                        <TouchableOpacity style={styles.checkoutButton} onPress={() => this.onPayment()}>
                        <Text style={styles.checkoutTitle}>TỔNG 
                            <Text style={{color:'#c70c0c', fontSize: 16}}> {isEmptyPrice ? 0 : formatPrice(this.totalPrice())} </Text>
                            vnd ĐẶT HÀNG NGAY </Text>
                        </TouchableOpacity>
                    ):null}
                    
                </View>
            </View>
        );
    }
}

export default Cart;

const { width } = Dimensions.get('window');
const imageWidth = width / 3;
const imageHeight = (imageWidth * 500) / 500;

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
        flexDirection: 'row',
        marginLeft: 20,
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
        justifyContent: 'flex-end',
        marginLeft: width/2 -30
    },
    deleteToCart:{
        alignItems:'flex-end',
        marginLeft: width/2 + 20
    }
});
