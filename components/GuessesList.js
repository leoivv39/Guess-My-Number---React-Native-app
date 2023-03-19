import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import GuessItem from "./GuessItem";

function GuessesList(props) {
  return (
    <FlatList
      data={props.guesses.slice().reverse()}
      renderItem={(itemData) => {
        return <GuessItem guess={itemData.item} />;
      }}
    ></FlatList>
  );
}

export default GuessesList;

const styles = StyleSheet.create({});
