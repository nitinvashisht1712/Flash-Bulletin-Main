import React from 'react'
import { View, Text, Image } from 'react-native'
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
    <View style={{height:50, width:'100%', justifyContent:'center', alignItems:'center', marginVertical:30}}>
      <Image  source={require("./assets/images/Logo.png")}
          style={{ height: 50, width: 50, marginVertical:10}}/>
           <Text style={{fontSize:20, marginVertical:10,fontWeight:'bold'}}>Hii, There</Text>
      </View>
 
  <DrawerItemList {...props}/>
 

  
</DrawerContentScrollView>
<TouchableOpacity style={{position:'absolute', bottom:30, right:25, height:40, width:80, backgroundColor:'#ff726f', alignItems:"center", justifyContent:'center',borderRadius:10 }} onPress={handleSignout}>
  <View>
  <Text style={{color:"#fff"}} >SIGN OUT</Text>
  </View>

</TouchableOpacity>
</View>
}
export default DrawerNav = () => {
  return (
    <NavigationContainer style={{position:'absolute', top:0}} independent={true}>
    <Drawer.Navigator screenOptions={{headerShown:true}
  } initialRouteName="Home" drawerContent={(props) => <CustomDrawer {...props}/>}>
    <Drawer.Screen name="Crypto-Price Tracker" component={Crypto} />
    <Drawer.Screen name=" Currency Convertor" component={CurrencyConvertor} />
    <Drawer.Screen name="News" component={News} />
    <Drawer.Screen name="ChatBot" component={ChatBot} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
};

console.disableYellowBox = true; 
