import { View, TextInput, StyleSheet, Button } from 'react-native';
const GoalInput = (props) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder='Enter the task' style={styles.input} onChangeText={props.onEnterGoalText} />
        <Button title='Add Goal' onPress={props.onAddGoal} />
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