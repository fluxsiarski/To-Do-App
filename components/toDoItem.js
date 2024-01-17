import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ToDoItem = ({ item, pressHandler }) => {
  // const deleteConfirmatin = (id) => {
  //   Alert.alert(
  //     "Delete todo",
  //     "Are you sure you want to delete this todo?",
  //     [{ text: "yes" }, { text: "no" }],
  //     (onPress = {})
  //   );

  //   pressHandler(item.id);
  // };

  return (
    <View style={s.toDoItemContainer}>
      <View style={s.item}>
        <TouchableOpacity
          onPress={() => pressHandler(item.id)}
          // onPress={() => deleteConfirmatin(item.id)}
          style={s.iconContainer} // You can add your custom styles here
        >
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

export default ToDoItem;

const s = StyleSheet.create({
  toDoItemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
});
