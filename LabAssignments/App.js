import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './Assignment3/DiscountCalculator';
import StudentRecord from './Assignment3/StudentRecord';
import ContactListScreen from './Assignment2Part2/ContactHomePage';
import ContactDetailsScreen from './Assignment2Part2/ContactDetailsPage';
import Activity from './LabTasks/Actvity1';
import Registration from './LabTasks/Registration';
import Login from './LabTasks/Login';
import BookFinderScreen from './LabTasks/Api';
import Sensors from './LabTasks/sensors';
import Accelermeter from './LabTasks/Accelometer';
import Barometr from './LabTasks/Barometer';
import { ParentComponent } from './ContextApiTask/Parent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ParentComponent></ParentComponent>
  //<Sensors></Sensors>
 /* <NavigationContainer>
  <Stack.Navigator initialRouteName="Main">
  <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Main Screen' }} />
  <Stack.Screen name="Acclometer" component={Accelermeter} options={{ title: 'Acceleometr' }} />
  <Stack.Screen name="Baromter" component={Barometr} options={{ title: 'Barometer' }} />

   </Stack.Navigator>
</NavigationContainer> */
  //<Accelermeter></Accelermeter>
   /* <Board></Board>*/
   /*<Calculator></Calculator>*/
  /* <StudentRecord></StudentRecord>*/
  /*<NavigationContainer>
  <Stack.Navigator initialRouteName="ContactList">
    <Stack.Screen name="ContactList" component={ContactListScreen} options={{ title: 'Contacts' }} />
    <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} options={{ title: 'Contact Details' }} />
  </Stack.Navigator>
</NavigationContainer>*/
/*
<NavigationContainer>
  <Stack.Navigator initialRouteName="HomePage">
    <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Product' }} />
    <Stack.Screen name="ProductDetailsPage" component={ProductDetailsPage} options={{ title: 'Product Details' }} />
  </Stack.Navigator>
</NavigationContainer>*/

/*
<NavigationContainer>
  <Stack.Navigator initialRouteName="Registration">
  <Stack.Screen name="Register" component={Registration} options={{ title: 'Registration page' }} />
  <Stack.Screen name="Login" component={Login} options={{ title: 'Login page' }} />

   </Stack.Navigator>
</NavigationContainer>*/
//<BookFinderScreen></BookFinderScreen>


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
