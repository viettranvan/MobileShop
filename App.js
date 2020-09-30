
import React,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar, Button} from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,  
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';


import MainTabScreen from './screens/MainTabS.js';
import DrawerContent from './screens/DrawerContent';
import ListCollectionScreen from './screens/Product/ListProduct';
import ProductDetailScreen from './screens/Product/ProductDetail';
import ListProductScreen from './screens/Product/ListProduct';
import ChangeInfoScreen from './screens/Profile/ChangeInfo';
import ChangePasswordScreen from './screens/Profile/ChangePassword';

import Header from './screens/Header';
import SupportScreen from './screens/Support';
import MainScreen from './screens/Main';
import RootStackScreen from './screens/RootStack';
import CartScreen from './screens/Cart';
import CollectionScreen from './screens/Product/Collection';
import Support from './screens/Support';
import { TouchableOpacity } from 'react-native-gesture-handler';

import{ AuthContext } from './components/context';

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


const ListProducttStackScreen = ({navigation}) => (
  <ListCategoryStack.Navigator headerMode='none'>
    <ListCategoryStack.Screen 
      name="List Product Screen" 
      component={ListProductScreen}
    />
  </ListCategoryStack.Navigator>
);


const App = () => {
  const  [isDarkTheme, setIsDarkTheme] = React.useState(false);

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

    const authContext = React.useMemo(() => ({
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
              {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name='MainDrawer' component={MainTabScreen} />
                <Drawer.Screen name='ListCollection' component={ListCollectionStackScreen}/>
                <Drawer.Screen name='ListProduct' component={ListProducttStackScreen}/>
                <Drawer.Screen name='Detail' component={ProductDetailStackScreen}/>
                <Drawer.Screen name='Support' component={SupportScreen} />
                <Drawer.Screen name='ChangeInfo' component={ChangeInfoScreen} />
                <Drawer.Screen name='ChangePassword' component={ChangePasswordScreen} />


              </Drawer.Navigator> */}
              <RootStackScreen/>
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
{/* <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
          </Stack.Navigator> */}

          // export default class App extends Component { 
//   render(){
    

//     return (
//       <PaperProvider theme={theme}>
//       <View style={{flex:1, backgroundColor: '#78aae3'}}>
//         <StatusBar barStyle='light-content' hidden={false} />
//         {/* <Header /> */}
//         <NavigationContainer theme={theme}>
//           <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
//             <Drawer.Screen name='MainDrawer' component={MainTabScreen} />
//             <Drawer.Screen name='ListCollection' component={ListCollectionStackScreen}/>
//             <Drawer.Screen name='ListProduct' component={ListProducttStackScreen}/>
//             <Drawer.Screen name='Detail' component={ProductDetailStackScreen}/>
//             <Drawer.Screen name='Support' component={SupportScreen} />
            


//           </Drawer.Navigator>
//           {/* <RootStackScreen/> */}
//         </NavigationContainer>
//       </View>
//       </PaperProvider>
//     );
//   }
  
// }