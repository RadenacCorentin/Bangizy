import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("DescriptionPage")}
      >
        Make me a catch please
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("AnotherPage")}
      >
        Make me a description
      </Button>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "90%",
    height: "10%",
    textAlign: "center",
    margin: "3%",
  },
  arrowContainer: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
});

export default Home;
