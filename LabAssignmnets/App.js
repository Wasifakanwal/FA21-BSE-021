import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './LabTasks/Lab5Tasks/game';
import Login from './LabTasks/Lab5Tasks/Login';
export default function App() {
  return (
    <View style={styles.container}>
     {/*} <Task></Task>*/}
     <Login></Login>
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
