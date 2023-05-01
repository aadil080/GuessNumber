import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/Images/Goal-Acheive.jpg")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone neeeded{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the Number <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>
        </View>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "#000000",
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: "#3f001f",
    fontWeight: "bold",
  },
});
