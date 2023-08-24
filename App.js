import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const App = () => {
  const [people, setPeople] = useState([
    { name: "Soovica", key: 1 },
    { name: "Ecady", key: 2 },
    { name: "Scarfy", key: 3 },
    { name: "Faprilla", key: 4 },
    { name: "Tarli", key: 5 },
    { name: "Viter", key: 6 },
    { name: "Chiapre", key: 7 },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
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
