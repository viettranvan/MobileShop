
import React,{Component,useEffect} from 'react';
import { StyleSheet, View,StatusBar, Button} from 'react-native';
import {
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,  
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MainTabScreen from './screens/MainTabS.js';
import DrawerContent from './screens/DrawerContent';
import ListCollectionScreen from './screens/Product/ListProduct';
import ProductDetailScreen from './screens/Product/ProductDetail';
import ListProductScreen from './screens/Product/ListProduct';
import ChangeInfoScreen from './screens/Profile/ChangeInfo';
import ChangePasswordScreen from './screens/Profile/ChangePassword';

import SupportScreen from './screens/Support';
import MainScreen from './screens/Main';
import RootStackScreen from './screens/RootStack';
import CartScreen from './screens/Cart';
import CollectionScreen from './screens/Product/Collection';
import Support from './screens/Support';

import{ AuthContext } from './components/context';

import checkLogin from './api/js/checkLogin';
import getToken from './api/js/getToken';
import global from './global';

const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const ListCollectionStack = createStackNavigator();
const ListProductStack = createStackNavigator();
const ListCategoryStack = createStackNavigator();


const ListCollectionStackScreen = ({navigation,route}) => (
  <ListCollectionStack.Navigator >
    <ListCollectionStack.Screen name="List Collection Screen" component={ListCollectionScreen} />
  </ListCollectionStack.Navigator>
);
// const ProductDetailStackScreen = (navigation) => (
//   <ListProductStack.Navigator headerMode='none'>
//     <ListProductStack.Screen name="Detail Product Screen" component={ProductDetailScreen} />
//   </ListProductStack.Navigator>
// );

const ProductDetailStackScreen = ({navigation,route}) => {
  return(
    <ProductDetailScreen navigation={navigation} route={route}/>
  );
}

const ChangeInfoScreen1 = ({navigation,route}) => {
  return(
    <ChangeInfoScreen navigation={navigation} route={route}/>
  );
}

const ChangePasswordScreen1 = ({navigation,route}) => {
  return(
    <ChangePasswordScreen navigation={navigation} route={route}/>
  );
}

const ListProductkScreen1 = ({navigation,route}) => {
  return(
    <ListProductScreen navigation={navigation} route={route}/>
  );
}

const MainTabScreen1 = ({navigation,route}) => {
  return(
    <MainTabScreen navigation={navigation} route={route} cartArray={global.cartArray}/>
  );
}

// const ListProducttStackScreen = ({navigation}) => (
//   <ListCategoryStack.Navigator headerMode='none'>
//     <ListCategoryStack.Screen 
//       name="List Product Screen" 
//       component={ListProductScreen}
//     />
//   </ListCategoryStack.Navigator>
// );


const App = () => {
  const  [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(()=>{
    console.log('APP');
    getToken()
    .then(token => checkLogin(token))
    .then(res => {
      console.log(res.token);
      console.log(res.user);
      global.onSignIn = res.user;
      setUserToken(res.token)
    })
    .catch(err => console.log('LOI:::',err))
  })

  const initialLoginState = {
    username: null,
    userToken: null
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  // const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: ()=> {
      setUserToken('abcabcabc')
    },
    signOut: ()=> {
      setUserToken(null)
    },
    signUp: ()=> {
      setUserToken('abcabcabc')
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);


  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <View style={{flex:1, backgroundColor: '#78aae3'}}>
          <StatusBar barStyle='light-content' hidden={false} />
          {/* <Header /> */}
          <NavigationContainer theme={theme}>

            {userToken != null ?(
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
              <Drawer.Screen name='MainDrawer' component={MainTabScreen1} />
              <Drawer.Screen name='ListCollection' component={ListCollectionStackScreen}/>
              <Drawer.Screen name='ListProduct' component={ListProductkScreen1}/>
              <Drawer.Screen name='Detail' component={ProductDetailStackScreen}/>
              <Drawer.Screen name='Support' component={SupportScreen} />
              <Drawer.Screen name='ChangeInfo' component={ChangeInfoScreen1} />
              <Drawer.Screen name='ChangePassword' component={ChangePasswordScreen1} />

            </Drawer.Navigator>
            ):
            <RootStackScreen/>
            }
            
          </NavigationContainer>
        </View>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
