import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ToDoItem = ({ item, pressHandler }) => {
  const deleteConfirmation = () => {
    Alert.alert("Delete todo", "Are you sure you want to delete this task?", [
      { text: "✅Yes", onPress: () => pressHandler(item.id) },
      { text: "❌No" },
    ]);
  };

  return (
    <View style={s.toDoItemContainer}>
      <View style={s.item}>
        <TouchableOpacity
          onPress={() => deleteConfirmation(item.id)}
          style={s.iconContainer}
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
