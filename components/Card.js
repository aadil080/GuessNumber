import { StyleSheet, View } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: 40,
    backgroundColor: "#3f001f",
    borderRadius: 10,
    elevation: 4, //For android Shadow
    //For Shadow in IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    //End of IOS Shadow
    justifyContent: "center",
    alignItems: "center",
  },
});
