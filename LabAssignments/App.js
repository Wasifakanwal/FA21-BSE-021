import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './Assignment3/DiscountCalculator';
import StudentRecord from './Assignment3/StudentRecord';
import ContactListScreen from './Assignment2Part2/ContactHomePage';
import ContactDetailsScreen from './Assignment2Part2/ContactDetailsPage';
const Stack = createStackNavigator();

export default function App() {
  return (
    
   /* <Board></Board>*/
   /*<Calculator></Calculator>*/
  /* <StudentRecord></StudentRecord>*/
  <NavigationContainer>
  <Stack.Navigator initialRouteName="ContactList">
    <Stack.Screen name="ContactList" component={ContactListScreen} options={{ title: 'Contacts' }} />
    <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} options={{ title: 'Contact Details' }} />
  </Stack.Navigator>
</NavigationContainer>
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
