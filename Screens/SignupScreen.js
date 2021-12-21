import React from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native'
import SignupForm from '../components/signupScreen/SignupForm';

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/Logo.png")}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <SignupForm navigation={navigation}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 50,
      paddingHorizontal: 12,
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 60,
    },
  });

export default SignupScreen
