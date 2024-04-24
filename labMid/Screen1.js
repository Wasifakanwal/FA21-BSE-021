import React from 'react';
import { View, StyleSheet ,ScrollView,TouchableOpacity,Text} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button } from 'react-native';

const CalendarScreen = ({ navigation }) => {
  // Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];

  const handleDatePress = () => {
    // Navigate to the prayer screen when a date is pressed
    navigation.navigate('Prayer');
  };
  const handlePreviousRecord = () => {
    // Navigate to the previous record screen
    navigation.navigate('Record');
  };


  return (
    
    <View style={styles.container}>
      <Calendar
        markedDates={{
          '2023-06-25': { selected: true, marked: true },
          '2023-06-24': { marked: true },
          '2023-06-26': { marked: true, dotColor: 'red', activeOpacity: 0,},
          [currentDate]: { selected: true, marked: true, selectedColor: 'black', textColor: 'white' },
        }}

        
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: 'black',
          selectedDayTextColor: 'white',
          todayTextColor: 'white',
          dayTextColor: 'black',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: '#00adf5',
          monthTextColor: '#000000',
          textMonthFontWeight: 'bold',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        onDayPress={handleDatePress}
      />
       <TouchableOpacity  onPress={handlePreviousRecord} >
        <Text>Previous Record</Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CalendarScreen;
