import { StyleSheet, View, Image, Text } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen(props) {
  return (
    <View style={styles.screenContainer}>
      <Title text="GAME OVER!" style={styles.title}></Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/finish.jpg")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Your phone needed{" "}
          <Text style={styles.innerText}>{props.guesses.length}</Text> rounds to
          guess the number <Text style={styles.innerText}>{props.number}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={"Start New Game"}
          textStyle={styles.buttonText}
          onPress={props.changeScreen}
        />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    paddingTop: 130,
  },
  title: {
    color: "white",
    borderColor: "white",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
    position: "absolute",
  },
  imageContainer: {
    overflow: "hidden",
    marginTop: 30,
    width: 300,
    height: 300,
    borderWidth: 4,
    borderRadius: 1500,
  },
  textContainer: {
    marginTop: 30,
    width: "90%",
  },
  text: {
    padding: 5,
    fontSize: 28,
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -3, height: 1 },
    textShadowRadius: 5,
  },
  innerText: {
    color: Colors.brightRed,
  },
  buttonContainer: {
    marginTop: 30,
    width: "70%",
  },
  buttonText: {
    opacity: 0.75,
    fontSize: 20,
  },
});
