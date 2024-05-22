import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BarChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialTopTabNavigator();

function PreviousRecordScreen() {
  
  const [TotalOfferdPrayerToday, setTotalOfferdPrayerToday] = useState(0);
  const [TotalOfferdPrayerLast7Days, setTotalOfferdPrayerLast7Days] = useState(0);
  const [TotalOfferdPrayerMonth, setTotalOfferdPrayerMonth] = useState(0);
  const [prayerCountsLast7Days, setPrayerCountsLast7Days] = useState([]);
  const [prayerCountsMonth, setPrayerCountsMonth] = useState([]);
  const [prayerCountsToday, setPrayerCountsToday] = useState([]);

  const calculateTotalOfferedPrayers = (prayerCounts) => {
    return prayerCounts.reduce((total, count) => total + count, 0);
  };
  const fromZero = (value) => {
    return value - 10; // Adjust this value as needed to raise the bars
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataString = await AsyncStorage.getItem("prayerDates");
        const data = JSON.parse(dataString);

        // Convert data object into an array of key-value pairs
        const prayerdata = Object.entries(data).map(([key, value]) => ({
          date: key,
          prayers: value,
        }));

        // Filter data for the last 7 days excluding today
        const today = new Date().toISOString().slice(0, 10);
        const last7DaysData = prayerdata.filter(entry => entry.date !== today).slice(-7);

        // Calculate and set total prayers for last 7 days
        const CountsLast7Days = Array(5).fill(0);
        last7DaysData.forEach((data) => {
          data.prayers.forEach((prayer, index) => {
            if (prayer === 0 || prayer === 1) {
              CountsLast7Days[index] += 1;
            }
          });
        });
        setPrayerCountsLast7Days(CountsLast7Days);
        setTotalOfferdPrayerLast7Days(calculateTotalOfferedPrayers(CountsLast7Days));

        // Filter data for the current month excluding today
        const currentMonth = new Date().toISOString().slice(0, 7);
        const currentMonthData = prayerdata
          .filter(entry => entry.date.startsWith(currentMonth))
          .filter(entry => entry.date !== today);

        // Calculate and set total prayers for the month
        const CountsMonth = Array(5).fill(0);
        currentMonthData.forEach((data) => {
          data.prayers.forEach((prayer, index) => {
            if (prayer === 0 || prayer === 1) {
              CountsMonth[index] += 1;
            }
          });
        });
        setPrayerCountsMonth(CountsMonth);
        setTotalOfferdPrayerMonth(calculateTotalOfferedPrayers(CountsMonth));

        // Calculate and set total prayers for today
        const todayData = prayerdata.slice(-1);
        const CountsToday = Array(5).fill(0);
        todayData.forEach((data) => {
          data.prayers.forEach((prayer, index) => {
            if (prayer === 0 || prayer === 1) {
              CountsToday[index] += 1;
            }
          });
        });
        setPrayerCountsToday(CountsToday);
        setTotalOfferdPrayerToday(calculateTotalOfferedPrayers(CountsToday));

      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <View style={styles.whole}>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          style: {
            marginTop: 20,
            backgroundColor: 'white',
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
          indicatorStyle: {
            height: '100%',
            borderRadius: 30,
            background: 'linear-gradient(135deg, blue, purple, pink)',
          },
          labelStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen name="Last 7 Days">
          {() => (
            <View style={styles.container}>
              <BarChart
                data={{
                  labels: ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
                  datasets: [{
                    data:prayerCountsLast7Days,
                    color: ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'],
                  }],
                }}
                width={400}
                height={220}
                chartConfig={{
                  backgroundColor: 'Black',
                  backgroundGradientFrom: 'purple',
                  backgroundGradientTo: 'Beige',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                
              />
              <View style={styles.prayerNamesContainer}>
                {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer, index) => (
                  <View key={index} style={styles.prayerNameItem}>
                    <View style={[styles.prayerColorBox, { backgroundColor: ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'][index] }]} />
                    <Text style={styles.prayerNameText}>{prayer}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.offeredPrayersText}>Offered - {TotalOfferdPrayerLast7Days}/35 prayers</Text>
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen name="Monthly">
          {() => (
            <View style={styles.container}>
              <BarChart
                data={{
                  labels: ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
                  datasets: [{
                    data: prayerCountsMonth,
                    color: ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'],
                  }],
                }}
                width={400}
                height={220}
                chartConfig={{
                  backgroundColor: 'white',
                  backgroundGradientFrom: 'purple',
                  backgroundGradientTo: 'white',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                horizontal
              />
              <View style={styles.prayerNamesContainer}>
                {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer, index) => (
                  <View key={index} style={styles.prayerNameItem}>
                    <View style={[styles.prayerColorBox, { backgroundColor: ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'][index] }]} />
                    <Text style={styles.prayerNameText}>{prayer}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.offeredPrayersText}>Offered - {TotalOfferdPrayerMonth}/150 prayers</Text>
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen name="Date Range">
          {() => (
            <View style={styles.container}>
              <BarChart
                data={{
                  labels: ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
                  datasets: [{
                    data: prayerCountsToday,
                    color: ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'],
                  }],
                }}
                width={400}
                height={220}
                yAxisLabel=""
                chartConfig={{
                  backgroundColor: 'Black',
                  backgroundGradientFrom: 'purple',
                  backgroundGradientTo: 'Beige',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
              <View style={styles.prayerNamesContainer}>
                {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer, index) => (
                  <View key={index} style={styles.prayerNameItem}>
                    <View style={[styles.prayerColorBox, { backgroundColor: ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'][index] }]} />
                    <Text style={styles.prayerNameText}>{prayer}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.offeredPrayersText}>Offered - {TotalOfferdPrayerToday}/5 prayers</Text>
            </View>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  prayerNamesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  prayerNameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  prayerColorBox: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  prayerNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  offeredPrayersText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PreviousRecordScreen;
