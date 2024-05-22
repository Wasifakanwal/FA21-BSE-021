import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './ToDoApp';
import ToDoListC from './TodoWithContext';
export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <ToDoListC></ToDoListC>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
