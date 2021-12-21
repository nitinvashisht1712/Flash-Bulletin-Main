import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import DrawerNav from "../DrawerNav";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <Header navigation={navigation} /> */}
    <DrawerNav/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default HomeScreen;
