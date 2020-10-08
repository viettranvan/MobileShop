import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import urls from '../urls';
import getToken from '../api/js/getToken';

const order_historyURL = urls[13].url;
const order_detailURL = urls[15].url;


// format giá theo định dạng có dấu phẩy
function formatPrice(price){
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
export default class OrderHistory extends Component {

  constructor(props){
    super(props);
    this.state= {
      order_history: [],
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    getToken()
    .then(token => {
      fetch(order_historyURL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ token })
        })
        .then(res => res.json())
        .then(data => {
          this.setState({order_history: data})
        })
    })
  }

  renderOder(){
    const {order_history} = this.state;
    order_history.map(data => (
      <View style={styles.orderRow} key={data.id_bill}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>ID đơn hàng:</Text>
            <Text style={{ color: '#2ABB9C' }}>ORDER00{data.id_bill}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Thời gian đặt:</Text>
            <Text style={{ color: '#C21C70' }}>{data.date_order}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
            <Text style={{ color: '#2ABB9C' }}>{data.status == 0 ? 'Chờ xác nhận' : 'Hoàn tất'}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng:</Text>
            <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{formatPrice(data.total)} vnd</Text>
        </View>
        <View style={{alignSelf:'flex-end'}}>
          <TouchableOpacity>
            <Text style={{color:'blue', fontStyle:'italic'}}>Chi Tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
      ))
  }

  gotoOrederDetail(id){
    fetch(order_detailURL+"?id="+id)
    .then(res => res.json())
    .then(data => {
      const {bill_detail} = data;
      this.props.navigation.navigate("OrderDetail",{bill_detail: bill_detail});
    })
  }
  
  totalPrice(){
    const {cartArray} = this.props;
    var kq = 0;
    cartArray.map(e => {
        kq += parseFloat(e.price) ;
    })
    return kq;
  }
  reLoadData(){
    this.getData();
  }
  render() {
    const {order_history} = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
            <TouchableOpacity onPress={ () => this.props.navigation.openDrawer() }>
                <MaterialCommunityIcons name="menu-open" color='white' size={40} />
            </TouchableOpacity>
          <Text style={styles.headerTitle}>Lịch sử đặt hàng</Text>
          <TouchableOpacity onPress={() => this.reLoadData()}>
            <MaterialCommunityIcons name="reload" color='white' size={40} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <ScrollView>
            {order_history == 'EMPTY' ? (
              <View style ={{justifyContent: 'center',alignContent:'center',alignItems:'center', backgroundColor:'#fff'}}>
                <Text>Lịch sử đặt hàng rỗng</Text>
              </View>
            ) :(
              order_history.map(data => (
                <View style={styles.orderRow} key={data.id_bill}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>ID đơn hàng:</Text>
                      <Text style={{ color: '#2ABB9C' }}>ORDER00{data.id_bill}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Thời gian đặt:</Text>
                      <Text style={{ color: '#C21C70' }}>{data.date_order}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
                      <Text style={{ color: '#2ABB9C' }}>{data.status == 0 ? 'Chờ xác nhận' : 'Hoàn tất'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng:</Text>
                      <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{formatPrice(data.total)} vnd</Text>
                  </View>
                  <View style={{alignSelf:'flex-end'}}>
                    <TouchableOpacity onPress={() => this.gotoOrederDetail(data.id_bill)}>
                      <Text style={{color:'blue', fontStyle:'italic'}}>Chi Tiết</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                ))
            )
            }
            
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
