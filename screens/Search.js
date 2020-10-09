import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import Header from './Header';
import urls from '../urls';

const list_productURL = urls[11].url;
const images_product_URL = urls[2].url;

// format giá theo định dạng có dấu phẩy
function formatPrice(price){
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const product_detail_URL = urls[3].url;
const searchURL = urls[12].url;

class Search extends Component {
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

    constructor(props){
        super(props);
        this.state = {
            data: [],
            laoding: false,
            text: ''
        }
    }

    componentDidMount(){
        this.requestAPI();
    }
    requestAPI = () => {
        this.setState({laoding : false});
        fetch(list_productURL)
        .then(res => res.json())
        .then(data => {
            const {product} = data;
            this.setState({data: product})
        })
        .catch(err => console.log(err))
    }

    _renderItem = ({ item, index}) => {
        const {
            product, mainRight, txtsmall_description,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer
        } = styles;
        return(
            <View style={product} >
                <Image source={{uri: images_product_URL + item.productImage[0]}} style={productImage} />
                <View style={mainRight}>
                    <Text style={txtName}>{toTitleCase(item.name)}</Text>
                    <Text style={txtsmall_description}>{item.small_description}</Text>
                    <Text style={txtPrice}>{formatPrice(item.price)} vnd</Text>
                    <View/>
                    <TouchableOpacity style={showDetailContainer} onPress={()=>this.gotoDetail(item.id_product)}>
                        <Text style={txtShowDetail}>Chi tiết</Text>
                    </TouchableOpacity>
                </View>
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

    _onChangeText(val){
        if(val == ''){
            this.requestAPI();
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

    render() {
        const {data} = this.state;
        return (
            <View style={{flex:1}}>
                <Header navigation={this.props.navigation}/>
                <View style={{backgroundColor:'#608cd6'}}>
                    <TextInput
                        style={styles.inputSearch}
                        placeholder='Bạn muốn mua điện thoại gì?'
                        onChangeText={val => this._onChangeText(val)}
                        onSubmitEditing={()=>this.onSearch()}
                    />
                </View>

                {data.length == 0 ? this.noResutlFound() :(
                    <FlatList
                        data={data} // array muốn render
                        renderItem={this._renderItem}
                        keyExtractor={(item,index) => index.toString()}
                    />
                )}
            </View>
        );
    }
}
export default Search;

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    inputSearch:{
        margin: 5,
        marginLeft: 30,
        marginRight: 30,
        height: 40
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
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtsmall_description: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: "italic"
    },
    txtShowDetail: {
        color: 'blue',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});
