import React,{Component} from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Login/Spalsh';
import SignInScreen from './Login/SignIn';
import SignUpScreen from './Login/SignUp';

const Stack = createStackNavigator();

const RootStack = ({ navigation }) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='SignInScreen' component={SignInScreen}/>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
    </Stack.Navigator>
);
    
export default RootStack;