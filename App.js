import React from 'react'
import { View, Text } from 'react-native'
import Crypto from './Crypto'
import News from './News'
import ChatBot from './chatbot/ChatBot'
import { SafeAreaView } from 'react-native-web'
import CurrencyConvertor from './CurrencyConvertor'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './DrawerNav'
const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {
return <View style={{flex:1}}>
  <DrawerContentScrollView {...props}>
  <Text>Hello</Text>
  <DrawerItemList {...props}/>
</DrawerContentScrollView>
<Text style={{position:'absolute', bottom:0}}>Hello</Text>
  </View>
}
const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator screenOptions={{headerShown:false}} initialRouteName="Home" drawerContent={(props) => <CustomDrawer {...props}/>}>
    <Drawer.Screen name="Crypto" component={Crypto} />
    <Drawer.Screen name="Convertor" component={CurrencyConvertor} />
    <Drawer.Screen name="News" component={News} />
    <Drawer.Screen name="ChatBot" component={ChatBot} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
