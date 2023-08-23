import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const App = () => {
  const [name, setName] = useState("Trey");
  const [age, setAge] = useState(40);
  const [feedback, setFeedback] = useState("");

  return (
    <View style={styles.container}>
      {/* form group */}
      <View style={styles.formGroup}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder={`e.g John Doe`}
          onChangeText={(val) => setName(val)}
        />
      </View>

      {/* form group */}
      <View style={styles.formGroup}>
        <Text>Age</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setAge(val)}
          keyboardType="numeric"
        />
      </View>

      {/* form group */}
      <View style={styles.formGroup}>
        <Text>Feedback</Text>
        <TextInput
          multiline
          style={[styles.input]}
          onChangeText={(val) => setFeedback(val)}
          keyboardType="default"
          placeholder="Enter your feedback"
        />
      </View>

      <Text>
        name: {name}, age: {age}, feedback: {feedback}
      </Text>
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
  formGroup: {
    width: "100%",
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaaaaa88",
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default App;
