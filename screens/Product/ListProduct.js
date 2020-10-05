import React, { Component } from "react";
import { View, Text, Image, StyleSheet,Dimensions,FlatList } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from "../Header";
import urls from '../../urls';

const URL_imagesProduct = urls[2].url;
const product_detail_URL = urls[3].url;

import {  TouchableOpacity } from "react-native-gesture-handler";

// format giá theo định dạng có dấu phẩy
function formatPrice(price){
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default class ListProduct extends Component {
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
  renderListProduct(product, index){
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
            <Text style={styles.productPrice} > {formatPrice(product.price)} 
              <Text style={{fontSize:14}}> vnd</Text>
            </Text>
          </TouchableOpacity>
        </View>
      <View style={{height: 10, width: width}}/>
    </View>
    );
  }
  render() {
    const {product} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <MaterialCommunityIcons name='backburger'size={35}/>
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 20}}>Danh mục sản phẩm</Text>
        </View>

        <FlatList
          horizontal={false}
          numColumns={2}
          data={product} // array muốn render
          renderItem={({ item,index }) => this.renderListProduct(item,index)}
          keyExtractor={(item) => item.id_product}
        />
      </View>
    );
  }
}

const {width,height} = Dimensions.get('window');
const productWidth = (width -20) / 2;
const productHeight = (productWidth /500)*500;

const styles = StyleSheet.create({
  container:{
    marginBottom: 80
  },
  body: {
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flex:1
  },
  goBack: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#b5b4b1',
    marginBottom: 10
  },
  productContainer:{
    width: productWidth,
    backgroundColor: '#e3e1e1',
    padding: 5,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5
  },
  productImage:{
    width: productWidth -20,
    height: productWidth -20,
    marginLeft:5,
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
    color: '#C21C70'
  },
  buttonDetail: {
    marginTop:5,
    marginRight: 5,
  },
  textDetail: {
    fontStyle: 'italic',
    color: 'blue',
  }
});
