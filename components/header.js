import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={s.headerContainer}>
      <Text style={s.headerText}>My Todo's</Text>
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  headerContainer: {
    backgroundColor: "coral",
    paddingTop: 60, // Adjust top padding to move the text down
    paddingBottom: 20, // Add some bottom padding for spacing
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
});
