import { View, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      };
    
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder='Enter the task' value={enteredGoalText} style={styles.input} onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
});