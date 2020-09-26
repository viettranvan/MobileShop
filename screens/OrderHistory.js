import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class OrderHistory extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
            <TouchableOpacity onPress={ () => this.props.navigation.openDrawer() }>
                <MaterialCommunityIcons name="menu-open" color='white' size={40} />
            </TouchableOpacity>
          <Text style={styles.headerTitle}>Lịch sử đặt hàng</Text>
          <View style={{paddingRight:15}}/>
        </View>

        <View style={styles.body}>
          <ScrollView>
            <View style={styles.orderRow}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>ID đơn hàng:</Text>
                  <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Thời gian đặt:</Text>
                  <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
                  <Text style={{ color: '#2ABB9C' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng:</Text>
                  <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>4.000.000 vnd</Text>
              </View>
            </View>

            <View style={styles.orderRow}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>ID đơn hàng:</Text>
                  <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Thời gian đặt:</Text>
                  <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
                  <Text style={{ color: '#2ABB9C' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng:</Text>
                  <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>4.000.000 vnd</Text>
              </View>
            </View>

            <View style={styles.orderRow}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>ID đơn hàng:</Text>
                  <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Thời gian đặt:</Text>
                  <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
                  <Text style={{ color: '#2ABB9C' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng:</Text>
                  <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>4.000.000 vnd</Text>
              </View>
            </View>

            <View style={styles.orderRow}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>ID đơn hàng:</Text>
                  <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Thời gian đặt:</Text>
                  <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
                  <Text style={{ color: '#2ABB9C' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng:</Text>
                  <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>4.000.000 vnd</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: { 
    flex: 1, 
    // backgroundColor: "#fff" 
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
  backIconStyle: { 
    width: 30, 
    height: 30 
  },
  body: { 
    flex: 10, 
    // backgroundColor: "red" 
  },
  orderRow: {
    height: width / 3,
    backgroundColor: "#FFF",
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: "space-around",
  },
});
