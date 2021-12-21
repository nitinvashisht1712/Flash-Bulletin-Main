import React from 'react'
import { View, Text } from 'react-native'
import Crypto from './Crypto'
import { firebase } from "./firebase";
import News from './News'
import ChatBot from './chatbot/ChatBot'
import { SafeAreaView } from 'react-native-web'
import CurrencyConvertor from './CurrencyConvertor'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import {currentUser} from './AuthNavigation';
const Drawer = createDrawerNavigator();
const handleSignout = async () => {
  try {
    await firebase.auth().signOut()
    console.log('signed out')
  } catch (error) {
    console.log(error);
  }
};
const CustomDrawer = (props) => {
return <View style={{flex:1}}>
  <DrawerContentScrollView {...props}>
  <Text>Hello {currentUser}</Text>
  <DrawerItemList {...props}/>
 

  
</DrawerContentScrollView>
<TouchableOpacity style={{position:'absolute', bottom:20}} onPress={handleSignout}>
  <View>
  <Text >SIGN OUT</Text>
  </View>

</TouchableOpacity>
</View>
}
export default DrawerNav = () => {
  return (
    <NavigationContainer independent={true}>
    <Drawer.Navigator screenOptions={{headerShown:false}
  } initialRouteName="Home" drawerContent={(props) => <CustomDrawer {...props}/>}>
    <Drawer.Screen name="Crypto" component={Crypto} />
    <Drawer.Screen name="Convertor" component={CurrencyConvertor} />
    <Drawer.Screen name="News" component={News} />
    <Drawer.Screen name="ChatBot" component={ChatBot} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
};


