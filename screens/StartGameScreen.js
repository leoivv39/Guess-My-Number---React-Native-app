import { View, Text, StyleSheet } from "react-native";
import InputNumber from "../components/InputNumber";
import Title from "../components/Title";

function StartGameScreen(props) {
  return (
    <View style={styles.appContainer}>
      <View style={styles.guessContainer}>
        <Title text="Guess My Number" style={styles.title} />
        <InputNumber onConfirm={props.updateInputNumber} />
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  appContainer: {
    alignItems: "center",
  },
  guessContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    marginBottom: 30,
  },
});
