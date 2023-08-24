import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const App = () => {
  const [people, setPeople] = useState([
    { name: "Soovica", id: 1 },
    { name: "Ecady", id: 2 },
    { name: "Scarfy", id: 3 },
    { name: "Faprilla", id: 4 },
    { name: "Tarli", id: 5 },
    { name: "Viter", id: 6 },
    { name: "Chiapre", id: 7 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        indicatorStyle="white"
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "#17a2b8",
    fontSize: 24,
    color: "#f8f9fa",
    borderRadius: 8,
  },
});

export default App;
