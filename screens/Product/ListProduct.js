import React, { Component } from "react";
import { View, Text, Image, StyleSheet,ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from "../Header";
import urls from '../../urls';

const images_product_URL = urls[2].url;
const product_detail_URL = urls[3].url;

import { TouchableOpacity } from "react-native-gesture-handler";

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
  render() {
    const {product} = this.props.route.params;
    return (
      <View style={{flex:1}}>
        <Header navigation={this.props.navigation} />
        <ScrollView >
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <MaterialCommunityIcons name='backburger'size={35}/>
            </TouchableOpacity>
            <Text style={{fontSize: 20, marginLeft: 20}}>Danh mục sản phẩm</Text>
          </View>
          {product.map(e => (
          <View style={styles.productContainer} key={e.id_product + 'a'}>
            <Image 
              source={{uri: images_product_URL + e.productImage[0]}} 
              style={styles.productImage}
            />
            <View style={{justifyContent: 'space-between',flex:1}}>
              <Text style={styles.productName}>{e.name}</Text>
              <Text style={styles.productDescription}>{e.small_description}</Text>
              <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.productPrice}>{formatPrice(e.price)} vnd</Text>
                <TouchableOpacity style={styles.buttonDetail} onPress={()=> this.gotoDetail(e.id_product)}>
                  <Text style={styles.textDetail}>Chi tiết</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          ))}
          
          
          
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  goBack: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#d7d9d2'
  },
  productContainer:{
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
    borderColor: '#aab3af',
    borderBottomWidth: 1.5,
    borderTopWidth : 1.5,
    backgroundColor: '#e9eddf',
    borderRadius: 10
  },
  productImage:{
    width: 100,
    height: 100,
    marginRight: 10,
    margin: 10,
    borderRadius: 10
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  productDescription:{
    fontStyle: 'italic'
  },
  productPrice: {
    fontSize: 21,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'red'
  },
  buttonDetail: {
    marginTop:5,
    marginRight: 5,
  },
  textDetail: {
    fontStyle: 'italic',
    color: 'blue'
  }

});


// <View style={styles.productContainer}>
//             <Image source={Realme} style={styles.productImage}/>
//             <View style={{justifyContent: 'space-between',flex:1}}>
//               <Text numberOfLines={2} style={styles.productName}>điện thoại realme 3 pro phiên bản 4gb ram - 64gb rom</Text>
              
//               <Text numberOfLines={2} style={styles.productDescription}>bản 4 -64gb bản 4 -64gb bản 4 -64gb bản 4 -64gb bản 4 -64gb bản 4 -64gb </Text>
//               <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
//                 <Text style={styles.productPrice}>24.000.000 vnd</Text>
//                 <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
//                   <Text style={styles.textDetail}>Chi tiết</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           <View style={styles.productContainer}>
//             <Image source={Realme} style={styles.productImage}/>
//             <View style={{justifyContent: 'space-between',flex:1}}>
//               <Text style={styles.productName}>Name</Text>
//               <Text style={styles.productDescription}>Decription</Text>
//               <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
//                 <Text style={styles.productPrice}>Price</Text>
//                 <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
//                   <Text style={styles.textDetail}>Chi tiết</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           <View style={styles.productContainer}>
//             <Image source={Realme} style={styles.productImage}/>
//             <View style={{justifyContent: 'space-between',flex:1}}>
//               <Text style={styles.productName}>Name</Text>
//               <Text style={styles.productDescription}>Decription</Text>
//               <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
//                 <Text style={styles.productPrice}>Price</Text>
//                 <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
//                   <Text style={styles.textDetail}>Chi tiết</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           <View style={styles.productContainer}>
//             <Image source={Realme} style={styles.productImage}/>
//             <View style={{justifyContent: 'space-between',flex:1}}>
//               <Text style={styles.productName}>Name</Text>
//               <Text style={styles.productDescription}>Decription</Text>
//               <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
//                 <Text style={styles.productPrice}>Price</Text>
//                 <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
//                   <Text style={styles.textDetail}>Chi tiết</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           <View style={styles.productContainer}>
//             <Image source={Realme} style={styles.productImage} />
//             <View style={{justifyContent: 'space-between',flex:1}}>
//               <Text style={styles.productName}>Name</Text>
//               <Text style={styles.productDescription}>Decription</Text>
//               <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
//                 <Text style={styles.productPrice}>Price</Text>
//                 <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
//                   <Text style={styles.textDetail}>Chi tiết</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>