import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Alert, View } from "react-native";
import { Header, TodoItem, AddTodo } from "./components";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "buy a coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play on the switch", key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todoItem) => todoItem.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed!") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      <View style={styles.content}>
        {/* todo form */}
        <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
