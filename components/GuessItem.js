import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

function GuessItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{props.guess.key}</Text>
      <Text style={styles.text}>Opponent's Guess: {props.guess.number}</Text>
    </View>
  );
}

export default GuessItem;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flexDirection: "row",
    borderWidth: 2,
    backgroundColor: Colors.yellow,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: 325,
    height: 50,
  },
  text: {
    marginHorizontal: 10,
    textShadowRadius: 5,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    fontSize: 15,
  },
});
