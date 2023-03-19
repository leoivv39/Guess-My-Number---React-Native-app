import { StyleSheet, Pressable, Image, Text, View } from "react-native";
import Colors from "../constants/colors";

function GuessButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
      >
        <Image source={require("../assets/images/sendLogo2.png")}></Image>
        <Text style={styles.text}>GUESS</Text>
      </Pressable>
    </View>
  );
}

export default GuessButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    width: 45,
  },
  buttonInnerContainer: {
    paddingTop: 28,
    alignItems: "center",
  },
  text: {
    color: Colors.yellow,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
