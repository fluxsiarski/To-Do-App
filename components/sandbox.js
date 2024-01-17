import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Sandbox = () => {
  return <View style={styles.container}></View>;
};

export default Sandbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "coral",
  },
});
