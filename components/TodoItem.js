import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#777",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
});

export default TodoItem;
