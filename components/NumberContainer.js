import { StyleSheet, View, Text, TextInput } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import GuessButton from "./GuessButton";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.currentGuess}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 3,
    width: 300,
    height: 100,
    borderColor: Colors.yellow,
    justifyContent: "center",
  },
  number: {
    color: Colors.yellow,
    fontWeight: "bold",
    fontSize: 40,
  },
});
