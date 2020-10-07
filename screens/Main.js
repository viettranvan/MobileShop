import React, {Component} from 'react';
import { View,StyleSheet,Dimensions, FlatList,  Button} from 'react-native';
import { TextInput } from 'react-native-paper';

import CollectionScreen from './Product/Collection';
import CategoryScreen from './Product/Category';
import TopProductScreen from './Product/TopProduct';
import Header from './Header';
import urls from '../urls';
import global from '../global';
import refreshToken from '../api/js/refreshToken';

// localhost
const URL = urls[0].url;
export default class Main extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            types: [], // dữ liệu đổ vào category
            topProduct: [], // dữ liệu đổ vào topProduct
            user: global.onSignIn,
            token: global.token,
            cartArray: []
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
        // sau 1 phut thi refreshToken
        setInterval(refreshToken,1000*60);
    }

    render(){
        const {types, topProduct, user, token} = this.state;
        const screens = [
            {
                key: '0',
                screen: <CategoryScreen navigation ={this.props.navigation} types={types}/>
            },
            {
                key: '1',
                screen: <CollectionScreen navigation ={this.props.navigation} route={this.props.route}/>
            },
            {
                key: '2',
                screen: <TopProductScreen navigation ={this.props.navigation} topProduct={topProduct} />
            },
        ];
        return(
            <View style={{flex:1}}>
                <Header navigation={this.props.navigation}/>
                <View style={{backgroundColor:'#608cd6'}}>
                    <TextInput
                        style={styles.inputSearch}
                        placeholder='Bạn muốn mua điện thoại gì?'
                        onFocus={()=> this.props.navigation.navigate("Search")}
                    />
                </View>
                
                <FlatList
                    data={screens} // array muốn render
                    renderItem={({ item }) => item.screen}
                    keyExtractor={(item) => item.key}
                />
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
        
    },
    inputSearch:{
        margin: 5,
        marginLeft: 30,
        marginRight: 30,
        height: 40
    },
});
  