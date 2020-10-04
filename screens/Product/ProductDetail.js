import React, {Component} from 'react';
import {View,  Text, Dimensions, StyleSheet,Button, Image,TouchableOpacity, ScrollView, Picker} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import urls from '../../urls';


const images_product_URL = urls[2].url;

// format giá theo định dạng có dấu phẩy
function formatPrice(price){
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
var i = 0;
export default class ProductDetail extends Component{

  constructor(){
    super();
    this.state = {
      selectedColor : ''
    }
  }

  showColor = (value) =>{
    // alert(value);
    this.setState({
      selectedColor: value
    });
  }
  render(){
    const {product_detail} = this.props.route.params;
    return(
      <View style={{flex:1}}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
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
        {product_detail.map( e => ( 
        <ScrollView style={styles.wrapper} key={e.id_product}>
          <View style={styles.swiperContainer}>
            <Swiper showsPagination width={imageWidth} height={imageHeight}>
              <Image 
                style={styles.productImageStyle} 
                source={{uri: images_product_URL + e.productImage[0]}} 
              />
              <Image 
                style={styles.productImageStyle} 
                source={{uri: images_product_URL + e.productImage[1]}} 
              />
              <Image 
                style={styles.productImageStyle} 
                source={{uri: images_product_URL + e.productImage[2]}} 
              />
              <Image 
                style={styles.productImageStyle} 
                source={{uri: images_product_URL + e.productImage[3]}} 
              />
              <Image 
                style={styles.productImageStyle} 
                source={{uri: images_product_URL + e.productImage[4]}} 
              />
            </Swiper>
          </View>
          
          <View style={{marginBottom:10}}>
            <Text style={styles.productName}>{e.name}</Text>
            <Text style={{fontStyle:'italic',fontSize:16}}>Chọn màu</Text>
            <View style={{backgroundColor:'#fff', borderRadius:10 }}>
              <Picker style={styles.test}
                selectedValue={this.state.selectedColor}
                onValueChange={this.showColor}
                >
                {e.color.map((e,index) => (
                  <Picker.Item label={e} value={index}/>
                ))}
              </Picker>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.smallDescription}>RAM / ROM: </Text>
              <Text style={styles.smallDescription}>{e.small_description}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:20}}>Giá Bán: </Text>
              <Text style={styles.productPrice}>{formatPrice(e.price)} vnd</Text>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <View style={{backgroundColor:'#f5e462'}}>
              <Text style={styles.descriptionTitle}>Thông số kỹ thuật</Text>
            </View>
            <View style={styles.textDescriptionContainer}>
              {e.full_description.map((e,index) => (
                  <View style={{backgroundColor: index%2 == 1 ? '#fff' : '#e2e3e1'}}>
                    <Text style={styles.textDescription}>{e} </Text>
                  </View>
                ))}
            </View>
          </View>
        </ScrollView>
        ))}

        {/* Button thêm vào giỏ hàng */}
        <View style={styles.addToCartContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
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
  // alignItems: 'center',
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

