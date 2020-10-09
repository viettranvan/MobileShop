import React, {Component} from 'react';
import {View,  Text, Dimensions, StyleSheet, Image,TouchableOpacity, Picker, FlatList, ToastAndroid} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import urls from '../../urls';
import global from '../../global';

const images_product_URL = urls[2].url;

// format giá theo định dạng có dấu phẩy
function formatPrice(price){
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
export default class ProductDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedColor : ''
    }
  }

  addToCart(){
    var flag = false;
    const {product_detail} = this.props.route.params;
    const cartArray = global.cartArray;
    {global.cartArray.map(e=>{
      if(e.id_product == product_detail[0].id_product){
        flag = true; // sản phẩm đã có trong giỏ hàng r thì k thêm nữa
      }
      return flag;
    })}

    if(!flag){
      global.cartArray =  cartArray.concat(product_detail);  
    }
    ToastAndroid.show("Thêm sản phẩm vào giỏ hàng thành công",ToastAndroid.SHORT);
  }

  renderProductDetail(product){
    return(
      <View style={styles.wrapper}>
        {/* Swiper hiển thị ảnh sản phẩm */}
        <View style={styles.swiperContainer}>
          <Swiper showsPagination width={imageWidth} height={imageHeight}>
            <Image 
              style={styles.productImageStyle} 
              source={{uri: images_product_URL + product.productImage[0]}} 
            />
            <Image 
              style={styles.productImageStyle} 
              source={{uri: images_product_URL + product.productImage[1]}} 
            />
            <Image 
              style={styles.productImageStyle} 
              source={{uri: images_product_URL + product.productImage[2]}} 
            />
            <Image 
              style={styles.productImageStyle} 
              source={{uri: images_product_URL + product.productImage[3]}} 
            />
            <Image 
              style={styles.productImageStyle} 
              source={{uri: images_product_URL + product.productImage[4]}} 
            />
          </Swiper>
        </View>
        {/* End Swiper hiển thị ảnh sản phẩm */}

        {/* Thông tin sản phẩm */}
        <View style={{marginBottom:10}} >
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={{fontStyle:'italic',fontSize:16}}>Chọn màu</Text>
        </View>
        <View style={{backgroundColor:'#fff', borderRadius:10 }}>
            <Picker style={styles.test}
              selectedValue={this.state.selectedColor}
              onValueChange={this.showColor}
              >
             {product.color.map((e,index) => (   
            <Picker.Item label={e} value={index} key={e+''+index} />
            ))}
          </Picker>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={styles.smallDescription}>RAM / ROM: </Text>
          <Text style={styles.smallDescription}>{product.small_description}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20}}>Giá Bán: </Text>
          <Text style={styles.productPrice}>{formatPrice(product.price)} vnd</Text>
        </View>

        {/* thông số kỹ thuật */}
        <View style={styles.descriptionContainer}>
          <View style={{backgroundColor:'#f5e462'}}>
            <Text style={styles.descriptionTitle}>Thông số kỹ thuật</Text>
          </View>
          <View style={styles.textDescriptionContainer}>
            <FlatList
              data={product.full_description} // array muốn render
              renderItem={({ item,index }) => (
                <View style={{backgroundColor: index%2 == 1 ? '#fff' : '#e2e3e1'}}>
                  <Text style={styles.textDescription}>{item} </Text>
                </View>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
        {/* End thông số kỹ thuật */}
      </View>
    );
  }
  render(){
    const {product_detail} = this.props.route.params;
    return(
      <View style={{flex:1}}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack() }>
              <MaterialCommunityIcons name="arrow-left" color='white' size={40} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chi tiết sản phẩm</Text>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Cart') }>
              <MaterialCommunityIcons name="cart" color='white' size={35} />
          </TouchableOpacity>
        </View>
        {/* End Header */}
        {/* Body */}
        <View style={styles.body}>

        <FlatList
            data={product_detail} // array muốn render
            renderItem={({ item }) => this.renderProductDetail(item)}
            keyExtractor={(item) => item.id_product}
            key='Detail'
        />

        {/* Button thêm vào giỏ hàng */}
        <View style={styles.addToCartContainer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={()=>this.addToCart()}>
            <Text style={styles.addTitle}>THÊM VÀO GIỎ HÀNG </Text>
        </TouchableOpacity>
        </View>
        {/*End Button thêm vào giỏ hàng */}
        </View>
        {/* End Body */}
      </View>
    );
  }
}
const {width,height} = Dimensions.get("window");
const imageWidth = width - 40;
const imageHeight = (imageWidth/500)*500;

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
body: {
    flex:10,
},
wrapper: { 
  backgroundColor: 'white',
  margin: 10,
  padding: 10,
  backgroundColor: '#e2e3e1'
},
swiperContainer:{
  flex:6,
  marginBottom:10
},
cardStyle: {
  flex: 10,
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  marginHorizontal: 10,
  marginVertical: 10
},
productImageStyle: {
  width: imageWidth,
  height: imageHeight,
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center'
},
productName:{
  fontSize: 26,
  fontWeight: 'bold',
  color:'#403939'
},
smallDescription:{
  marginTop:10,
  marginBottom:10,
  fontSize: 16,
  fontStyle:'italic'
},
productPrice:{
  fontSize: 20,
  fontWeight:'bold',
  color:'red'
},
descriptionContainer:{
  borderWidth:1,
  borderColor: '#8a8584',
  marginBottom:20
},
descriptionTitle:{
  fontSize: 16,
  textAlign: 'center'
},
textDescriptionContainer:{
  flex:1,
  justifyContent:'center',
  alignContent:'center',
},
textDescription:{
  fontSize: 12,
  padding: 5,
  paddingBottom:10
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
