import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="new todo..."
        onChangeText={changeHandler} // onChangeText={(value) => changeHandler }
        style={s.input}
        autoCapitalize="none"
      />

      <Button
        title="add todo"
        onPress={() => submitHandler(text)}
        color="coral"
      />
    </View>
  );
};

export default AddTodo;

const s = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
  },
});
