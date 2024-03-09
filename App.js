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

      <View style={styles.stats}>
        <Text style={[styles.textContainer, styles.textDistance]}>
          Repos
          {"\n"}
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>148</Text>
        </Text>

        <Text style={[styles.textContainer, styles.textDistance]}>
          Followers
          {"\n"}
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>32</Text>
        </Text>

        <Text style={[styles.textContainer, styles.textDistance]}>
          Following
          {"\n"}
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>20</Text>
        </Text>
      </View>

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
  stats: {
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 0,
    backgroundColor: "#d3d3d3",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
