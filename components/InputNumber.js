import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { Alert } from "react-native";
import PrimaryButton from "./PrimaryButton";
import Colors from "../constants/colors";

function isNumber(string) {
  if (string === "") {
    return false;
  }
  for (let char of string) {
    if (char < "0" || char > "9") {
      return false;
    }
  }
  return true;
}

function InputNumber(props) {
  const [inputNumber, setInputNumber] = useState("");

  function handleCurrentInput(text) {
    setInputNumber(text);
  }

  function setCurrentNumber() {
    if (
      !isNumber(inputNumber) ||
      parseInt(inputNumber) <= 0 ||
      parseInt(inputNumber) > 99
    ) {
      Alert.alert(
        "Invalid number!",
        "You must enter a number between 1 and 99!",
        [{ text: "Okay", style: "destructive", onPress: onReset }]
      );
      return;
    }
    props.onConfirm(inputNumber);
    setInputNumber("");
  }

  function onReset() {
    setInputNumber("");
  }

  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guessText}>Enter a number</Text>
      <View style={styles.guessTextContainer}>
        <TextInput
          onChangeText={handleCurrentInput}
          value={inputNumber}
          style={styles.guessTextInput}
          maxLength={2}
          keyboardType="number-pad"
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Reset" onPress={onReset}></PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Confirm"
            onPress={setCurrentNumber}
          ></PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default InputNumber;

const styles = StyleSheet.create({
  guessContainer: {
    alignItems: "center",
    backgroundColor: "#3d0011",
    opacity: 2,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    width: "90%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    flex: 1,
  },
  guessText: {
    fontSize: 30,
    marginTop: 10,
    color: Colors.yellow,

    fontFamily: "Poppins-Thin",
  },
  guessTextContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.yellow,
    alignItems: "center",
    width: 60,
  },
  guessTextInput: {
    color: Colors.yellow,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
  },
});
