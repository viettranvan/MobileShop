import React, {Component} from 'react';
import {ScrollView,  Text, Button,StyleSheet} from 'react-native';
import CollectionScreen from './Collection';
import CategoryScreen from './Category';
import TopProductScreen from './TopProduct';

export default class Main extends Component{
    render(){
        return(
            // <View style={styles.container}>
            //     <Text>Main screen</Text>
            // </View>
            <ScrollView style={styles.container}>
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
});
  