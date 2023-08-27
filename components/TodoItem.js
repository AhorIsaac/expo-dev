import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={styles.item}>
          <MaterialIcons name="delete" size={18} color="#333" />
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "coral",
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 10,
    backgroundColor: "#eee",
    flexDirection: 'row',
  }, 
  itemText: {
    marginLeft: 10,
  }
});

export default TodoItem;
