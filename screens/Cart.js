import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet, Image,Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import global from '../global';

import sp1 from '../Image/oppo-a11x_800x450.jpg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            numOfProduct: 1
        }
    }
    
    reduceProduct(){
        if(this.state.numOfProduct > 1){
            this.setState({numOfProduct: this.state.numOfProduct - 1})
        }
    }

    increaseProduct(){
        this.setState({numOfProduct: this.state.numOfProduct + 1})
    }
    render(){
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer() }>
                        <MaterialCommunityIcons name="menu-open" color='white' size={40} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Giỏ hàng</Text>
                    <View style={{paddingRight:15}}/>
                </View>

                <Button
                    title='log'
                    onPress={()=> { console.log(global.cart) } }
                />

                <View style={{flex:10}}>
                    <ScrollView >
                    <View style={styles.product}>
                            <Image source={sp1} style={styles.productImage} />
                            <View style={styles.mainRight}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.txtName}>{toTitleCase('black of the')}</Text>
                                    <TouchableOpacity>
                                        <Text style={{  color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.txtPrice}>{100}$</Text>
                                </View>
                                <View style={styles.productController}>
                                    <View style={styles.numberOfProduct}>
                                        <TouchableOpacity style={styles.border} onPress={() => this.reduceProduct()}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{fontSize:20}}>{this.state.numOfProduct}</Text>
                                        <TouchableOpacity style={styles.border} onPress={() => this.increaseProduct()}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.showDetailContainer}>
                                        <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.product}>
                            <Image source={sp1} style={styles.productImage} />
                            <View style={styles.mainRight}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.txtName}>{toTitleCase('black of the')}</Text>
                                    <TouchableOpacity>
                                        <Text style={{  color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.txtPrice}>{100}$</Text>
                                </View>
                                <View style={styles.productController}>
                                    <View style={styles.numberOfProduct}>
                                        <TouchableOpacity style={styles.border} onPress={() => this.reduceProduct()}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{fontSize:20}}>{this.state.numOfProduct}</Text>
                                        <TouchableOpacity style={styles.border} onPress={() => this.increaseProduct()}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.showDetailContainer}>
                                        <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.product}>
                            <Image source={sp1} style={styles.productImage} />
                            <View style={styles.mainRight}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.txtName}>{toTitleCase('black of the')}</Text>
                                    <TouchableOpacity>
                                        <Text style={{  color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.txtPrice}>{100}$</Text>
                                </View>
                                <View style={styles.productController}>
                                    <View style={styles.numberOfProduct}>
                                        <TouchableOpacity style={styles.border} onPress={() => this.reduceProduct()}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{fontSize:20}}>{this.state.numOfProduct}</Text>
                                        <TouchableOpacity style={styles.border} onPress={() => this.increaseProduct()}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.showDetailContainer}>
                                        <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.product}>
                            <Image source={sp1} style={styles.productImage} />
                            <View style={styles.mainRight}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.txtName}>{toTitleCase('black of the')}</Text>
                                    <TouchableOpacity>
                                        <Text style={{  color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.txtPrice}>{100}$</Text>
                                </View>
                                <View style={styles.productController}>
                                    <View style={styles.numberOfProduct}>
                                        <TouchableOpacity style={styles.border} onPress={() => this.reduceProduct()}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{fontSize:20}}>{this.state.numOfProduct}</Text>
                                        <TouchableOpacity style={styles.border} onPress={() => this.increaseProduct()}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.showDetailContainer}>
                                        <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.product}>
                            <Image source={sp1} style={styles.productImage} />
                            <View style={styles.mainRight}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.txtName}>{toTitleCase('black of the')}</Text>
                                    <TouchableOpacity>
                                        <Text style={{  color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.txtPrice}>{100}$</Text>
                                </View>
                                <View style={styles.productController}>
                                    <View style={styles.numberOfProduct}>
                                        <TouchableOpacity style={styles.border} onPress={() => this.reduceProduct()}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{fontSize:20}}>{this.state.numOfProduct}</Text>
                                        <TouchableOpacity style={styles.border} onPress={() => this.increaseProduct()}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={styles.showDetailContainer}>
                                        <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        
                    </ScrollView>
                    <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={styles.checkoutTitle}>TỔNG {1000}$ THANH TOÁN NGAY </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Cart;

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
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
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
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
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    border: {
        borderWidth: 0.5,
        height: 20,
        width: 20,
        justifyContent:'center',
        alignSelf: 'center',
        alignItems:  'center'
    }
});