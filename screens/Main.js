import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity,StyleSheet,Dimensions, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
// import CollectionScreen from './Collection/Collection';
import CollectionScreen from './Collection/Collection';
// import CategoryScreen from './Category/Category';
import CategoryScreen from './Category/Category';
import TopProductScreen from './Product/TopProduct';
import Header from './Header';


const {height} = Dimensions.get("window");

export default class Main extends Component{
    openMenu(){
        this.props.navigation.openDrawer();
    }
    render(){
        return(

            <ScrollView style={styles.container}>
                <Header navigation={this.props.navigation}/>                
                <CollectionScreen navigation ={this.props.navigation}/>
                <CategoryScreen navigation ={this.props.navigation}/>
                <TopProductScreen navigation ={this.props.navigation}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dcdedd',
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
  