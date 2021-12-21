import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { firebase } from "../../firebase";
import {DrawerNav} from "../../DrawerNav";
const handleSignout = async () => {
  try {
    await firebase.auth().signOut()
    console.log('signed out')
  } catch (error) {
    console.log(error);
  }
};

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/Logo.png")}
        />
      </TouchableOpacity>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 45,
    height: 60,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 33,
    height: 33,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#ff3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
