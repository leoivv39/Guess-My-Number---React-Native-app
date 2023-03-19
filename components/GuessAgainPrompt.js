import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import Colors from "../constants/colors";
import { Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function GuessAgainPrompt(props) {
  function handleUpdateLowerGuess() {
    if (props.currentNumber > props.currentGuess) {
      Alert.alert("Lie!", "You know that is wrong", [
        { text: "Sorry", style: "destructive" },
      ]);
      return;
    }
    props.setMaxBoundary(props.currentGuess - 1);
    props.updateGuess();
  }
  function handleUpdateHigherGuess() {
    if (props.currentNumber < props.currentGuess) {
      Alert.alert("Lie!", "You know that is wrong", [
        { text: "Sorry", style: "destructive" },
      ]);
      return;
    }
    props.setMinBoundary(props.currentGuess + 1);
    props.updateGuess();
  }
  return (
    <View style={styles.promptContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton
              title={<AntDesign name="minus" size={24} color="white" />}
              onPress={handleUpdateLowerGuess}
            />
          </View>
          <View style={styles.button}>
            <PrimaryButton
              title={<AntDesign name="plus" size={24} color="white" />}
              onPress={handleUpdateHigherGuess}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default GuessAgainPrompt;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    margin: 10,
    width: "40%",
  },
  text: {
    color: Colors.yellow,
    fontSize: 20,
    fontFamily: "Poppins-Thin",
  },
  promptContainer: {
    marginTop: 30,
    backgroundColor: Colors.purple,
    borderRadius: 8,
    width: "75%",
    height: "15%",
  },
});
