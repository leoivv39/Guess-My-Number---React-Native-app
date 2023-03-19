import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import GuessAgainPrompt from "../components/GuessAgainPrompt";
import { useState, useEffect } from "react";
import { useRef } from "react";
import GuessesList from "../components/GuessesList";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function GameScreen(props) {
  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);
  const initialGuess = getRndInteger(1, 100);
  useEffect(() => {
    props.updateGuess(initialGuess);
  }, []);

  function updateMinBoundary(number) {
    minBoundary.current = number;
  }

  function updateMaxBoundary(number) {
    maxBoundary.current = number;
  }

  function handleNewGuess() {
    const newGuess = getRndInteger(minBoundary.current, maxBoundary.current);
    props.updateGuess(newGuess);
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess" style={styles.title} />
      <NumberContainer currentGuess={props.currentGuess} />
      <GuessAgainPrompt
        updateGuess={handleNewGuess}
        currentNumber={props.currentNumber}
        currentGuess={props.currentGuess}
        setMaxBoundary={updateMaxBoundary}
        setMinBoundary={updateMinBoundary}
      />
      <GuessesList guesses={props.guesses} />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
  },
  title: {
    borderColor: "white",
    color: "white",
  },
});
