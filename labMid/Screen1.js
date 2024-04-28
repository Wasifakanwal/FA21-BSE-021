import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text} from 'react-native';
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

          [currentDate]: { selected: true, marked: true, selectedColor: 'black', textColor: 'white' },
        }}

        
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          dayTextColor: 'black',
          textDisabledColor: '#d9e1e8',
          arrowColor: '#00adf5',
          monthTextColor: '#000000',
          textMonthFontWeight: 'bold',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        onDayPress={handleDatePress}
      />
       
        <Button style={styles.button} title="previous Record"  color="purple" onPress={handlePreviousRecord}></Button>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    width:50,
    borderBottomWidth:2,
  }
});

export default CalendarScreen;
