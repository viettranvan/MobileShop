import React, { Component } from "react";
import { View, Text, Image, StyleSheet,Dimensions,FlatList } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../Header";
import urls from '../../urls';

const URL_imagesProduct = urls[2].url;
const product_detail_URL = urls[3].url;
const searchURL = urls[12].url;


// format giá theo định dạng có dấu phẩy
function formatPrice(price){
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default class ListProduct extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [],
      text: ''
    }
  }

  componentDidMount(){
    this.getAllProduct();
  }

  getAllProduct(){
    const {product} = this.props.route.params;
    this.setState({data:product})
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

  _onChangeText(val){
    if(val == ''){
        this.getAllProduct();
    }
    else{
        this.setState({text : val})
    }
  }

  onSearch(){
    const {text} = this.state;
    fetch(searchURL+'?key=' + text )
    .then(res => res.json())
    .then(data => {
        if(data.result == 'NO_RESULT_FOUND'){
            this.setState({data: []})
        }
        else{
            this.setState({data: data.product})
        }
    })
    .catch(err => console.log(err))
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

  noResutlFound(){
    return(
      <View style={{justifyContent: 'center',alignContent:'center',alignItems:'center'}}>
          <Text>Không tìm thấy kết quả</Text>
      </View>
    );
  }

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <View >
          <Header navigation={this.props.navigation} />
          <View style={{backgroundColor:'#608cd6'}}>
            <TextInput
              style={styles.inputSearch}
              placeholder='Bạn muốn mua điện thoại gì?'
              onChangeText={val => this._onChangeText(val)}
              onSubmitEditing={()=>this.onSearch()}
            />
          </View>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <MaterialCommunityIcons name="arrow-left" color='black' size={38} />
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Danh mục sản phẩm</Text>
          </View>
        </View>

        {data.length == 0 ? this.noResutlFound() : (
          <View style={{marginBottom:140}}>
            <FlatList
              horizontal={false}
              numColumns={2}
              data={data} // array muốn render
              renderItem={({ item,index }) => this.renderListProduct(item,index)}
              keyExtractor={(item) => item.id_product}
            />
          </View>
        )}
      </View>
    );
  }
}

const {width,height} = Dimensions.get('window');
const productWidth = (width -20) / 2;
const productHeight = (productWidth /500)*500;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  body: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex:1
  },
  goBack: {
    paddingTop: 5,
    flexDirection: 'row',
    backgroundColor: '#b5b4b1',
    borderRadius: 5,
    marginTop: 5,
    marginBottom:5
  },
  screenTitle:{
    fontSize: 24, 
    marginLeft: 20, 
    fontWeight:'bold', 
    fontStyle:'italic'
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
    color: 'red'
  },
  inputSearch:{
    margin: 5,
    marginLeft: 30,
    marginRight: 30,
    height: 40
  },
});
