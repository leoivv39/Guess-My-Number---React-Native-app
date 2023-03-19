import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [guesses, setGuesses] = useState([]);
  const [currentNumber, setCurrentNumber] = useState();
  const [generatedGuess, setGeneratedGuess] = useState(0);
  const screen = useRef(
    <StartGameScreen updateInputNumber={handleInputNumber} />
  );

  const [fontsLoaded] = useFonts({
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (currentNumber) {
    if (currentNumber === generatedGuess) {
      screen.current = (
        <GameOverScreen
          guesses={guesses}
          number={currentNumber}
          changeScreen={handleChangeScreenToMain}
        />
      );
    } else {
      screen.current = (
        <GameScreen
          currentNumber={currentNumber}
          updateGuess={addGuess}
          currentGuess={generatedGuess}
          guesses={guesses}
        />
      );
    }
  }

  function handleChangeScreenToMain() {
    setGuesses([]);
    setCurrentNumber();
    setGeneratedGuess(0);
    screen.current = (
      <StartGameScreen updateInputNumber={handleInputNumber}></StartGameScreen>
    );
  }

  function handleInputNumber(number) {
    setCurrentNumber(parseInt(number));
  }

  function addGuess(guess) {
    setGeneratedGuess(guess);
    setGuesses((prevGuesses) => {
      return [...prevGuesses, { number: guess, key: guesses.length + 1 }];
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/dices.jpg")}
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen.current}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
    position: "absolute",
  },
});
