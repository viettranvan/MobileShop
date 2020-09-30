import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity,StyleSheet,Dimensions, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';

import CollectionScreen from './Product/Collection';
import CategoryScreen from './Product/Category';
import TopProductScreen from './Product/TopProduct';

import Header from './Header';
import urls from '../urls';

// localhost
const URL = urls[0].url;
export default class Main extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            types: [], // dữ liệu đổ vào category
            topProduct: [], // dữ liệu đổ vào topProduct 
        }
    }
    
    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            const {type, product} = data; // type: tên biến mà server trả về
            this.setState({
                types: type,
                topProduct:product
            }) 
        });
    }

    render(){
        const {types, topProduct} = this.state;
        return(
            <View style={{flex:1}}>
                <Header navigation={this.props.navigation}/>    
                <ScrollView style={styles.container}>
                    <CollectionScreen navigation ={this.props.navigation} route={this.props.route}/>
                    <CategoryScreen navigation ={this.props.navigation} types={types}/>
                    <TopProductScreen navigation ={this.props.navigation} topProduct={topProduct} />
                </ScrollView>
            </View>
        );
    }
}
const {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        textAlign: 'center',
        fontSize: 24, 
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
    },
    textinp: {
        height: 40,
        marginRight: 40,
        marginLeft: 40,
        
    }
});
  