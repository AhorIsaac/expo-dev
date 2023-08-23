import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>
          It is important to know where you are going than to get there quickly.
          Do not mistake activity for achievement.
        </Text>
        <Text style={styles.boldText}>
          It is important to know where you are going than to get there quickly.
          Do not mistake <Text> activity for achievement</Text>.
        </Text>
        <Text>
          It is important to know where you are going than to get there quickly.
          Do not mistake activity for achievement.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
});
