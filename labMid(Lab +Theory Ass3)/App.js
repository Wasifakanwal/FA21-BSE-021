import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from './Screen1'; 
import PrayerScreen from './Screen2'; 
import StreakScreen from './Screen3';
import PreviousRecordScreen from './Screen4';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Calendar" // Set the initial route name
        screenOptions={{
          headerTitleAlign: 'center', // Center align header title
          headerTitleStyle: { fontWeight: 'bold', color: '#000000' }, // Bold and black color for header title
        }}>
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ title: 'Salah Tracker' }} // Set the title for the Calendar screen
        />
        <Stack.Screen
          name="Prayer"
          component={PrayerScreen}
          options={{ title: 'Prayer Times' }} // Set the title for the Prayer screen
        />
        <Stack.Screen
          name="Streak"
          component={StreakScreen}
          options={{ title: 'Streak' }} // Set the title for the Streak screen
        />
         <Stack.Screen
          name="Record"
          component={PreviousRecordScreen}
          options={{ title: 'Previous Record' }} // Set the title for the Streak screen
        />
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
