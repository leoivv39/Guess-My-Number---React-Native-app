import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Title(props) {
  return <Text style={[styles.title, props.style]}>{props.text}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    color: Colors.yellow,
    borderWidth: 2,
    borderColor: Colors.yellow,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
});
