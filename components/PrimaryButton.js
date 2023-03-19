import { Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton(props) {
  return (
    <View style={[styles.buttonOuterContainer, props.style]}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: Colors.red }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    backgroundColor: "#4e0329",
    elevation: 2,
  },
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
