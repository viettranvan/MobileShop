import React, {Component} from 'react';
import {View,  Text, StyleSheet, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SamSung from '../../Image/Samsung-Galaxy-S20-color-render-leak.jpg';


export default class Test extends Component{

    gotoListProduct(){
        this.props.navigation.navigate('Detail');
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>top Product</Text>
                </View>
                <View style={styles.body}>   
                    <TouchableOpacity style={styles.productContainer} onPress={()=>this.gotoListProduct()}>
                        <Image source={SamSung} style={styles.productImage}/>
                        <Text style={styles.productName} >Name kfsnksfn kfnskfn khfsiknf jnksfnsf k fksjkf ljfnskfnbjik ónkfb</Text>
                        <Text style={styles.productPrice} >Price</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.productContainer} onPress={()=>this.gotoListProduct()}>
                        <Image source={SamSung} style={styles.productImage}/>
                        <Text style={styles.productName} >Name</Text>
                        <Text style={styles.productPrice} >Price</Text>
                    </TouchableOpacity>
                    <View style={{height: 10, width: width}}/>
                    <TouchableOpacity style={styles.productContainer} onPress={()=>this.gotoListProduct()}>
                        <Image source={SamSung} style={styles.productImage}/>
                        <Text style={styles.productName} >Name kfsnksfn kfnskfn khfsiknf jnksfnsf k fksjkf ljfnskfnbjik ónkfb</Text>
                        <Text style={styles.productPrice} >Price</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.productContainer} onPress={()=>this.gotoListProduct()}>
                        <Image source={SamSung} style={styles.productImage}/>
                        <Text style={styles.productName} >Name</Text>
                        <Text style={styles.productPrice} >Price nè =))</Text>
                    </TouchableOpacity>
                    <View style={{height: 10, width: width}}/>
                </View>
            </View>
        );
    }
}

const {width,height} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth /800)*400;



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      margin: 10
    },
    titleContainer: {
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        fontSize:  24,
        fontWeight: "bold",
        color: '#706d62',
        fontStyle: 'italic'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',

    },
    productContainer: {
        width: productWidth,
        paddingBottom: 10,
        backgroundColor: '#faf7f5',
        padding: 10
    },
    productImage: {
        width: productWidth - 20,
        height: productHeight,
    },
    productName: {

    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
});
  