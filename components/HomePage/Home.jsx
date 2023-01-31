import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.homePage}
        locations={[0, 1]}
        colors={["#aa0707", "#280a33"]}
      >
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../../assets/logo.png")}
        />
        <Button
          style={[styles.catchButton, styles.buttonStyle]}
          onPress={() => navigation.navigate("CatchPage")}
        >
          <Text style={styles.typoTextButton}>{`Make me catch phrase`}</Text>
          <Image
            source={require("../../assets/description-chevron-right.png")}
          />
        </Button>

        <Button
          style={[styles.descriptionButton, styles.buttonStyle]}
          onPress={() => navigation.navigate("DescriptionPage")}
        >
          <Text style={styles.typoTextButton}>{`Make me a description`}</Text>
          <Image
            source={require("../../assets/description-chevron-right.png")}
          />
        </Button>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    width: "100%",
    height: "100%",
  },

  logoIcon: {
    display: "flex",
    height: "55%",
    width: "100%",
  },

  catchButton: {
    top: "60%",
    bottom: "35%",
  },

  descriptionButton: {
    top: "70%",
    bottom: "25%",
  },

  buttonStyle: {
    left: "3%",
    right: "3%",
    width: "95%",
    height: "6%",
    position: "absolute",
    borderWidth: 3,
    borderColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  typoTextButton: {
    alignItems: "center",
    display: "flex",
    color: "white",
  },
});

export default Home;
