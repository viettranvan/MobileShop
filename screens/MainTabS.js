import React,{Component} from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MainScreen from './Main';
import CartScreen from './Cart';
import SearchScreen from './Search';
import OrderHistoryScreen from './OrderHistory';
import ProfileScreen from './Profile/Profile';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


class MainTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      cartArray: []
    }
  }

  render(){
    const {cartArray} = this.props;
    const CartScreen1 = ({navigation,route}) => {
      return(
        <CartScreen navigation={navigation} route={route} cartArray={cartArray}/>
      );
    }
    return(
      <Tab.Navigator activeColor="#f0edf6" inactiveColor="#3e2465" barStyle={{backgroundColor:'#195ad1'}}>
            <Tab.Screen 
              name="Main" 
              component={MainScreen} 
              options={{
                tabBarLabel:'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen 
              name="Cart" 
              component={CartScreen1}
              options={{
                tabBarLabel: 'Giỏ hàng',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cart" color={color} size={26} />
                ),
              }}
              />
            <Tab.Screen 
              name="Search" 
              component={SearchScreen} 
              options={{
                tabBarLabel: 'Tìm Kiếm',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="magnify" color={color} size={26} />
                ),
              }}
              />
            <Tab.Screen 
              name="OrderHistory" 
              component={OrderHistoryScreen} 
              options={{
                tabBarLabel: 'Lịch sử',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="history" color={color} size={26} />
                ),
              }}
              />
            <Tab.Screen 
              name="Profile" 
              component={ProfileScreen} 
              options={{
                tabBarLabel: 'Thông tin',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
              }}
              />
        </Tab.Navigator> 
    );
  }
}
// const MainTab = () =>(
//         <Tab.Navigator activeColor="#f0edf6" inactiveColor="#3e2465" barStyle={{backgroundColor:'#195ad1'}}>
//             <Tab.Screen 
//               name="Main" 
//               component={MainScreen} 
//               options={{
//                 tabBarLabel:'Home',
//                 tabBarIcon: ({ color }) => (
//                   <MaterialCommunityIcons name="home" color={color} size={26} />
//                 ),
//               }}
//             />
//             <Tab.Screen 
//               name="Cart" 
//               component={CartScreen} 
//               options={{
//                 tabBarLabel: 'Giỏ hàng',
//                 tabBarIcon: ({ color }) => (
//                   <MaterialCommunityIcons name="cart" color={color} size={26} />
//                 ),
//                 tabBarBadge: global.cartArray.length
//               }}
//               />
//             <Tab.Screen 
//               name="Search" 
//               component={SearchScreen} 
//               options={{
//                 tabBarLabel: 'Tìm Kiếm',
//                 tabBarIcon: ({ color }) => (
//                   <MaterialCommunityIcons name="magnify" color={color} size={26} />
//                 ),
//               }}
//               />
//             <Tab.Screen 
//               name="OrderHistory" 
//               component={OrderHistoryScreen} 
//               options={{
//                 tabBarLabel: 'Lịch sử',
//                 tabBarIcon: ({ color }) => (
//                   <MaterialCommunityIcons name="history" color={color} size={26} />
//                 ),
//               }}
//               />
//             <Tab.Screen 
//               name="Profile" 
//               component={ProfileScreen} 
//               options={{
//                 tabBarLabel: 'Thông tin',
//                 tabBarIcon: ({ color }) => (
//                   <MaterialCommunityIcons name="account" color={color} size={26} />
//                 ),
//               }}
//               />
//         </Tab.Navigator> 
// );

export default MainTab;

