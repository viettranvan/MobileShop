import React, {Component} from 'react';
import {View,  Text, Button, Dimensions, StyleSheet, Image,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';

import sp1 from '../../Image/iphone-8-1.jpg';
import sp2 from '../../Image/xiaomi-banner-resize.jpg';
import sp3 from '../../Image/vsmart-banner-resize.jpg';
import sp4 from '../../Image/oppo-banner-resize.jpg';

export default class ListProduct extends Component{
    render(){
      return(
        <View style={{flex:1}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
                <MaterialCommunityIcons name="arrow-left" color='white' size={40} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Chi tiết sản phẩm nè</Text>
            <View style={{paddingRight:15}}/>
          </View>

          <View style={styles.body}>
            <View style={styles.wrapper}>
                  <View style={{flex:6}}>
                      <Swiper showsPagination width={imageWidth} height={imageHeight}>
                          <Image style={styles.productImageStyle} source={sp1}/>
                          <Image style={styles.productImageStyle} source={sp2}/>
                          <Image style={styles.productImageStyle} source={sp3}/>
                          <Image style={styles.productImageStyle} source={sp4}/>
                      </Swiper>
                  </View>
              </View>

          </View>
        </View>
      );
        
    }
}
const {width,height} = Dimensions.get("window");
const imageWidth = width - 40;
const imageHeight = (imageWidth/500)*500;

const styles = StyleSheet.create({
  wrapper: { 
    height : height*0.5 ,
    backgroundColor: 'white',
    margin: 10,
    padding: 10
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
  body: {
      flex:10,
  },
  cardStyle: {
    flex: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10
  },
  productImageStyle: {
    width: imageWidth,
    height: imageHeight,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
},
});

// cardStyle: {
//   flex: 10,
//   backgroundColor: '#FFFFFF',
//   borderRadius: 5,
//   marginHorizontal: 10,
//   marginVertical: 10
// },
// cartStyle: {
//   width: 25,
//   height: 25
// },
// backStyle: {
//   width: 25,
//   height: 25
// },
// productStyle: {
//   width: width / 2,
//   height: width / 2
// },
// footer: {
//   flex: 6
// },
// imageContainer: {
//   flex: 6,
//   alignItems: 'center',
//   flexDirection: 'row',
//   marginHorizontal: 10
// },
// textMain: {
//   paddingLeft: 20,
//   marginVertical: 10
// },
// textBlack: {
//   fontSize: 20,
//   fontWeight: 'bold',
//   color: '#3F3F46'
// },
// textSmoke: {
//   fontSize: 20,
//   color: '#9A9A9A'
// },
// textHighlight: {
//   fontSize: 20,
//   color: '#7D59C8'
// },
// titleContainer: {
//   borderBottomWidth: 1,
//   borderColor: '#F6F6F6',
//   marginHorizontal: 20,
//   paddingBottom: 5
// },
// descContainer: {
//   margin: 10,
//   paddingTop: 10,
//   paddingHorizontal: 10
// },
// descStyle: {
//   color: '#AFAFAF'
// },
// linkStyle: {
//   color: '#7D59C8'
// },
// productImageStyle: {
//   width: swiperWidth,
//   height: swiperHeight,
//   marginHorizontal: 5
// },
// mainRight: {
//   justifyContent: 'space-between',
//   alignSelf: 'stretch',
//   paddingLeft: 20
// },
// txtColor: {
//   color: '#C21C70',
//   fontSize: 15,
//   fontWeight: '400',
// },
// txtMaterial: {
//   color: '#C21C70',
//   fontSize: 15,
//   fontWeight: '400',
// }

// return(
          


//     <View style={cardStyle}>


        
//         <View style={imageContainer}>
            // <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
            //     <Image source={sp1} style={productImageStyle} />
            //     <Image source={sp2} style={productImageStyle} />
            //     <Image source={sp3} style={productImageStyle} />
            //     <Image source={sp4} style={productImageStyle} />
            // </ScrollView>
//         </View>
//         <View style={footer}>
//             <View style={titleContainer}>
//                 <Text style={textMain}>
//                     <Text style={textBlack}>name</Text>
//                     <Text style={textHighlight}> / </Text>
//                     <Text style={textSmoke}>price</Text>
//                 </Text>
//             </View>
//             <View style={descContainer}>
//                 <Text style={descStyle}>description</Text>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
//                     <Text style={txtMaterial}>Material </Text>
//                     <View style={{ flexDirection: 'row' }} >
//                         <Text style={txtColor}>Color </Text>
//                         <View style={{ height: 15, width: 15, borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
//                     </View>
//                 </View>
//             </View>
//         </View>
//     </View>
// </View>
//   );