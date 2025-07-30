import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/Goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter the task"
          value={enteredGoalText}
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#b180f0"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e085a",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 5,
    width: "80%",
    padding: 16,
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
