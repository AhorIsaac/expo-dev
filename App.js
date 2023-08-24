import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Header, TodoItem } from "./components";

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

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      <View style={styles.content}>
        {/* todo form */}

        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
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
