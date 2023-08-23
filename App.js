import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  const [name, setName] = useState("Trey");
  const [person, setPerson] = useState({ name: "Mario", age: 40 });

  const clickHandler = () => {
    setName("Tremaine");
    setPerson({ name: "Omarion", age: 45 });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}{" "}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Click Me" onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#f8f9fa",
    padding: 12,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default App;
