import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Lab6Task/chessBoard';
import LoopBoard from './Lab6Task/chessboardwithLoop';
export default function App() {
  return (
    
   /* <Board></Board>*/
   <LoopBoard></LoopBoard>
   
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
