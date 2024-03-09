import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require("./assets/octocat-1709958392792.png")}
          style={styles.avatar}
        />
        <Text style={[styles.textContainer, styles.textDistance]}>
          Tanvir Hasan Prince
          {"\n"}
          <Text style={{ color: "blue" }}>@tanvir.hasan.prince</Text>
          {"\n"}
          Joined on 9th March 2024
        </Text>
      </View>
      <Text style={styles.textContainer}>
        I'm a passionate product engineer who thrives on solving real-world
        problems with elegant code solutions. With a keen eye for detail and a
        knack for innovation, I specialize in developing web applications using
        a variety of modern technologies and frameworks.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50 / 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  textDistance: {
    lineHeight: 30,
  },
});
