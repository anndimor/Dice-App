import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

const backgroundColor = "#fff";
const diceColor = "#50C9CE";

const Dice = (props) => {
   let val;
   switch (props.value) {
      case 1:
         val = "one";
         break;
      case 2:
         val = "two";
         break;
      case 3:
         val = "three";
         break;
      case 4:
         val = "four";
         break;
      case 5:
         val = "five";
         break;
      case 6:
         val = "six";
         break;
      default:
         val = "one";
         break;
   }
   return <FontAwesome5 name={"dice-" + val} size={150} color={diceColor} />;
};

export default function App() {
   const [dice1, setDice1] = useState(1);
   const [dice2, setDice2] = useState(1);
   const handleStateUpdate = () => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
   };

   return (
      <View style={styles.container}>
         <View style={styles.diceContainer}>
            <Dice value={dice1} />
            <Dice value={dice2} />
         </View>
         <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleStateUpdate}
         >
            <Text style={styles.buttonText}>Zar At</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: backgroundColor,
      alignItems: "center",
      justifyContent: "center",
   },
   diceContainer: {
      flexDirection: "row",
      width: "75%",
      justifyContent: "space-between",
   },
   buttonContainer: {
      padding: 15,
      backgroundColor: "#72A1E5",
      borderRadius: 20,
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 80,
   },
   buttonText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
   },
});
