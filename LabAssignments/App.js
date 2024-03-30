import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './Assignment3/DiscountCalculator';
import StudentRecord from './Assignment3/StudentRecord';
export default function App() {
  return (
    
   /* <Board></Board>*/
   /*<Calculator></Calculator>*/
   <StudentRecord></StudentRecord>
   
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
