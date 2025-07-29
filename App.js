
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onEnterGoalText={goalInputHandler} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <GoalItem text={itemData.item} />
            )
          }}
          keyExtractor={(item, index) => index}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 4,
  },
  
});