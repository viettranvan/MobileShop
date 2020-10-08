
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity,Button,FlatList,Image, ToastAndroid, Alert} from 'react-native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import urls from '../urls';

const URL_imagesProduct = urls[2].url;
const product_detail_URL = urls[3].url;
const delete_orderURL = urls[16].url;

// format giá theo định dạng có dấu phẩy
function formatPrice(price){
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

class OrderDetail extends Component {
    _renderItem(product) {
        return(
            <View style={styles.product}>
                <Image 
                    source={{uri: URL_imagesProduct + product.link[0]}} 
                    style={styles.productImage} 
                />
                <View style={styles.mainRight}>
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
    totalPrice(){
        const {bill_detail} = this.props.route.params;
        var kq = 0;
        bill_detail.map(e => {
            kq += parseFloat(e.price) ;
        })
        return kq;
    }
    deleteOrder(id){
        Alert.alert(
            'Thông báo',
            'Xác nhận hủy đơn hàng ?',
            [
                { text: 'Không', style: 'cancel' },
                { text: 'Đồng ý', onPress: () => {
                    fetch(delete_orderURL,{
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({ id })
                    })
                    .then(res => res.text())
                    .then(data => {
                        if(data == "DELETE_SUCCESS"){
                            this.props.navigation.navigate("OrderHistory");
                            ToastAndroid.show("Hủy đơn hàng thành công",ToastAndroid.SHORT);
                        }
                    })
                }}
            ]
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
    render() {
        const {bill_detail} = this.props.route.params;
        return (
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="white"
                  size={40}
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Chi tiết đơn hàng</Text>
              <View/>
            </View>
            <View style={{flex:10}}>  
                <FlatList
                    data={bill_detail} // array muốn render
                    renderItem={({ item }) => this._renderItem(item)}
                    keyExtractor={(item,index) => index.toString()}
                />
                <View style={styles.checkoutButton}>
                    <Text style={styles.checkoutTitle}>TỔNG: 
                        <Text style={styles.txtTitle}> {formatPrice(this.totalPrice())} vnd</Text>
                    </Text>
                    <Text style={styles.checkoutTitle}>Trạng thái đơn hàng: {bill_detail[0].status == 0 }
                        <Text style={styles.txtTitle}> {bill_detail[0].status == 0 ? "Chờ xác nhận" : "Hoàn tất"}</Text>
                    </Text>
                    <Text style={styles.checkoutTitle}>Thời gian đặt hàng: 
                        <Text style={styles.txtTitle}> {bill_detail[0].date_order}</Text>
                    </Text>
                </View>
                {bill_detail[0].status == 0 ? (
                <View style={styles.addToCartContainer}>
                    <TouchableOpacity style={styles.addToCartButton} onPress={()=>this.deleteOrder(bill_detail[0].id_bill)}>
                        <Text style={styles.addTitle}>Hủy Đơn Hàng </Text>
                    </TouchableOpacity>
                </View>
                ) : null}
                
            </View>
          </View>
        );
    }
}
const { width } = Dimensions.get('window');
const imageWidth = width / 3;
const imageHeight = (imageWidth * 500) / 500;

const styles = StyleSheet.create({
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
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
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
    deleteToCart:{
        alignItems:'flex-end',
        marginLeft: width/2 + 20
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
    productController: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: width/2 - 100
    },
    txtShowDetail: {
        color: 'blue',
        fontSize: 18,
        textAlign: 'right',
        fontStyle: 'italic'
    },
    checkoutButton: {
        height: 80,
        margin: 10,
        paddingLeft: 20,
        // marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 8,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtTitle: {
        color: 'black',
        fontWeight:'normal',
        fontSize: 14
    },
    addToCartContainer:{
        padding: 20,
        paddingTop:0,
        paddingBottom: 0
    },
    addToCartButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#d11a0d',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'white'
    },
});

export default OrderDetail;

                