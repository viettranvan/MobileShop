import React, { Component } from "react";
import { View, Text, Button, Image, StyleSheet,ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from "../Header";

import Realme from "../../Image/realme3_800x450.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ListProduct extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#dbd7db',flex:1}}>
        <Header navigation={this.props.navigation} />
        <ScrollView >
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <MaterialCommunityIcons
                name='backburger'
                size={35}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 20, marginLeft: 20}}>Danh mục sản phẩm</Text>
          </View>
          <View style={styles.productContainer}>
            <Image source={Realme} style={styles.productImage}/>
            <View style={{justifyContent: 'space-between',flex:1}}>
              <Text style={styles.productName}>Realme 3 pro</Text>
              <Text style={styles.productDescription}>bản 4 -64gb</Text>
              <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.productPrice}>4.000.400vnd</Text>
                <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
                  <Text style={styles.textDetail}>Chi tiết</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image source={Realme} style={styles.productImage}/>
            <View style={{justifyContent: 'space-between',flex:1}}>
              <Text numberOfLines={2} style={styles.productName}>điện thoại realme 3 pro phiên bản 4gb ram - 64gb rom</Text>
              
              <Text numberOfLines={2} style={styles.productDescription}>bản 4 -64gb bản 4 -64gb bản 4 -64gb bản 4 -64gb bản 4 -64gb bản 4 -64gb </Text>
              <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.productPrice}>24.000.000 vnd</Text>
                <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
                  <Text style={styles.textDetail}>Chi tiết</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image source={Realme} style={styles.productImage}/>
            <View style={{justifyContent: 'space-between',flex:1}}>
              <Text style={styles.productName}>Name</Text>
              <Text style={styles.productDescription}>Decription</Text>
              <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.productPrice}>Price</Text>
                <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
                  <Text style={styles.textDetail}>Chi tiết</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image source={Realme} style={styles.productImage}/>
            <View style={{justifyContent: 'space-between',flex:1}}>
              <Text style={styles.productName}>Name</Text>
              <Text style={styles.productDescription}>Decription</Text>
              <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.productPrice}>Price</Text>
                <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
                  <Text style={styles.textDetail}>Chi tiết</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image source={Realme} style={styles.productImage}/>
            <View style={{justifyContent: 'space-between',flex:1}}>
              <Text style={styles.productName}>Name</Text>
              <Text style={styles.productDescription}>Decription</Text>
              <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.productPrice}>Price</Text>
                <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
                  <Text style={styles.textDetail}>Chi tiết</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image source={Realme} style={styles.productImage} />
            <View style={{justifyContent: 'space-between',flex:1}}>
              <Text style={styles.productName}>Name</Text>
              <Text style={styles.productDescription}>Decription</Text>
              <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.productPrice}>Price</Text>
                <TouchableOpacity style={styles.buttonDetail} onPress={()=>this.props.navigation.navigate('Detail')}>
                  <Text style={styles.textDetail}>Chi tiết</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  goBack: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row'
  },
  productContainer:{
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
    borderColor: '#aab3af',
    borderBottomWidth: 1.5,
    borderTopWidth : 1.5,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  productImage:{
    width: 100*600/450,
    height: 120,
    marginRight:  10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
