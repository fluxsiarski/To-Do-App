import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/header";
import ToDoItem from "./components/toDoItem";
import { useState } from "react";
import AddTodo from "./components/addTodo";
import Sandbox from "./components/sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", id: "1" },
    { text: "Create an app", id: "2" },
    { text: "React native lesson 20:00", id: "3" },
  ]);

  /*
// Let's say todos = [item1, item2]
setTodos([...todos, newItem]); // Might reference an outdated todos if there were other updates
setTodos(prevTodos => [...prevTodos, newItem]); // Always references the most current todos

Ensures Latest State: By using a function (like (prevTodo) => {...}), React guarantees that you get the most recent state value at the 
time of update. This function receives the previous state as its argument, ensuring that you're working with the most up-to-date version of 
the state.
*/

  const pressHandler = (id) => {
    setTodos((prevTodo) => {
      // prevTodo: variable represents the previous state of the todos array.
      return prevTodo.filter((todo) => todo.id !== id); // todo: represents each individual item in the previous state during the filtering process.
    });
  };

  const submitHandler = (text) => {
    const taskExists = todos.some((todo) => todo.text === text);

    const addTaskToCurrentList = (shouldAddTask) => {
      if (shouldAddTask) {
        setTodos((prevTodo) => {
          return [{ text: text, id: Math.random().toString() }, ...prevTodo];
        });
      }
    };

    if (text.length >= 3) {
      if (taskExists) {
        Alert.alert(
          "Task Already Exists",
          "This task already exists in your list.",
          [
            {
              text: "OK",
              onPress: () => console.log("alert closed"),
            },
            {
              text: "Add nonetheless",
              onPress: () => {
                const shouldAddTask = true;
                addTaskToCurrentList(shouldAddTask);
              },
            },
          ]
        );
      } else {
        const shouldAddTask = true;
        addTaskToCurrentList(shouldAddTask);
      }
    } else {
      Alert.alert(
        "OOPS",
        `Todos must be over 3 chars long. You\'ve typed just ${text.length} ${
          text.length === 1 ? "char" : "chars"
        }`,
        [
          {
            text: "Understood",
            onPress: () => console.log("alert closed"),
          },
        ]
      );
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={s.container}>
        <Header />
        <View style={s.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={s.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
