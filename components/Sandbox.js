import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 1,
    padding: 10,
    backgroundColor: "violet",
  },
  boxTwo: {
    flex: 2,
    padding: 20,
    backgroundColor: "gold",
  },
  boxThree: {
    flex: 1,
    padding: 30,
    backgroundColor: "coral",
  },
  boxFour: {
    flex: 3,
    padding: 40,
    backgroundColor: "skyblue",
  },
});

export default Sandbox;
