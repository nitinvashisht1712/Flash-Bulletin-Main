import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { View, Text } from "react-native";
import LoginForm from "../components/loginScreen/LoginForm";

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={{ height: 100, width: 100 }}
        />
      </View>
      <LoginForm navigation={navigation}/>
    </View>
  );
};

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

export default LoginScreen;
