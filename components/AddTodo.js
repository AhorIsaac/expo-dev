import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder={`new todo...`}
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button title="Add" onPress={() => submitHandler(text)} color={`coral`} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
