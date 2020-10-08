
import React,{useEffect} from 'react';
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
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabS.js';
import DrawerContent from './screens/DrawerContent';
import ProductDetailScreen from './screens/Product/ProductDetail';
import ListProductScreen from './screens/Product/ListProduct';
import ChangeInfoScreen from './screens/Profile/ChangeInfo';
import ChangePasswordScreen from './screens/Profile/ChangePassword';

import OrderDetailScreen from './screens/OrderDetail';
import SupportScreen from './screens/Support';
import RootStackScreen from './screens/RootStack';

import{ AuthContext } from './components/context';

import checkLogin from './api/js/checkLogin';
import getToken from './api/js/getToken';
import global from './global';

const Drawer = createDrawerNavigator();

const ProductDetailkScreenComponent = ({navigation,route}) => {
  return(
    <ProductDetailScreen navigation={navigation} route={route}/>
  );
}

const ChangeInfoScreenComponent = ({navigation,route}) => {
  return(
    <ChangeInfoScreen navigation={navigation} route={route}/>
  );
}

const ChangePasswordScreenComponent = ({navigation,route}) => {
  return(
    <ChangePasswordScreen navigation={navigation} route={route}/>
  );
}

const ListProductkScreenComponent = ({navigation,route}) => {
  return(
    <ListProductScreen navigation={navigation} route={route}/>
  );
}

const MainTabScreenComponent = ({navigation,route}) => {
  return(
    <MainTabScreen navigation={navigation} route={route} cartArray={global.cartArray}/>
  );
}


const App = () => {
  const  [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(()=>{
    getToken()
    .then(token => checkLogin(token))
    .then(res => {
      global.onSignIn = res.user;
      setUserToken(res.token)
    })
    .catch(err => console.log(err))
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
              <Drawer.Screen name='MainDrawer' component={MainTabScreenComponent} />
              <Drawer.Screen name='ListProduct' component={ListProductkScreenComponent}/>
              <Drawer.Screen name='Detail' component={ProductDetailkScreenComponent}/>
              <Drawer.Screen name='ChangeInfo' component={ChangeInfoScreenComponent} />
              <Drawer.Screen name='ChangePassword' component={ChangePasswordScreenComponent} />
              <Drawer.Screen name='Support' component={SupportScreen} />
              <Drawer.Screen name='OrderDetail' component={OrderDetailScreen} />

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
