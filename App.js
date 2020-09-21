
import * as React from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
import MainScreen from './src/Main';
import OrderHistoryScreen from './src/OrderHistory';
import ChangeInfoScreen from './src/ChangeInfo';
import SearchScreen from './src/Search';
import CartScreen from './src/Cart';
import Header from './src/Header';

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <View style={{flex:1, backgroundColor: '#78aae3'}}>
      <StatusBar barStyle='light-content' hidden={false} />
      <Header />

      <NavigationContainer >
        {/* <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
        </Stack.Navigator> */}
        <Tab.Navigator>
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
            component={CartScreen} 
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
              tabBarLabel: 'Thông tin',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="history" color={color} size={26} />
              ),
            }}
            />
          <Tab.Screen 
            name="Profile" 
            component={ChangeInfoScreen} 
            options={{
              tabBarLabel: 'Thông tin',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
            />
        </Tab.Navigator>
    
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
