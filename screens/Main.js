import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import CollectionScreen from './Collection';
import CategoryScreen from './Category';
import TopProductScreen from './TopProduct';
import Header from './Header';


const {height} = Dimensions.get("window");

export default class Main extends Component{
    openMenu(){
        this.props.navigation.openDrawer();
    }
    render(){
        return(

            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={{backgroundColor: '#608cd6'}}>
                    <View style={{height: height/9 }}>
                        <View style={styles.headerTitle}>
                            <TouchableOpacity onPress={ () => this.openMenu() }>
                                <MaterialCommunityIcons name="menu-open" color='white' size={40} />
                            </TouchableOpacity>
                            <Text style={styles.title}>Mobile
                                <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#10e345' }}> Shop</Text>
                            </Text>
                            <Text>abc</Text>
                        </View>
                        <TextInput
                            style={styles.textinp}
                            placeholder='Bạn muốn mua điện thoại gì?'
                        />
                    </View>
                </View>
                {/* end Header */}
                
                <CollectionScreen />
                <CategoryScreen />
                <TopProductScreen />
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
  