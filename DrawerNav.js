import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CurrencyConvertor from './CurrencyConvertor';
import Crypto from './Crypto';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Crypto" component={Crypto} />
        <Drawer.Screen name="Convertor" component={CurrencyConvertor} />
        </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNav
   