import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BarChart } from 'react-native-chart-kit';

const Tab = createMaterialTopTabNavigator();

// Define your prayers data
const last7DaysPrayersData = {
  labels: ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
  datasets: [
    {
      data: [20, 25, 18, 30, 35],
      color: ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'], // Colors for each prayer
    },
  ],
};

const monthlyPrayersData = {
  labels: ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
  datasets: [
    {
      data: [120, 150, 140, 150, 130],
      color: ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'], // Colors for each prayer
    },
  ],
};

const Last7DaysScreen = () => (
  <View style={styles.container}>
    <BarChart
      data={last7DaysPrayersData}
      width={400}
      height={220}
      yAxisLabel=""
      chartConfig={{
        backgroundColor: 'Black',
        backgroundGradientFrom: 'purple',
        backgroundGradientTo: 'Beige',
        decimalPlaces: 0,
        color: (opacity = 1) => ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'].map(color => `${color} ${opacity}`),
        verticalLabelRotation: false, // Set to true for horizontal bar chart
        horizontal: true // Make the bar chart horizontal
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
    {/* Display prayer names with colored square boxes */}
    <View style={styles.prayerNamesContainer}>
      {last7DaysPrayersData.labels.map((prayer, index) => (
        <View key={index} style={styles.prayerNameItem}>
          <View style={[styles.prayerColorBox, { backgroundColor: last7DaysPrayersData.datasets[0].color[index] }]} />
          <Text style={styles.prayerNameText}>{prayer}</Text>
        </View>
      ))}
    </View>
    {/* Display the number of prayers offered */}
    <Text style={styles.offeredPrayersText}>Offered - 35/35 prayers</Text>
  </View>
);

const MonthlyScreen = () => (
  <View style={styles.container}>
    <BarChart
      data={monthlyPrayersData}
      width={400}
      height={220}
      yAxisLabel=""
      chartConfig={{
        backgroundColor: 'white',
        backgroundGradientFrom: 'purple',
        backgroundGradientTo: 'white',
        decimalPlaces: 0,
        color: (opacity = 1) => ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'].map(color => `${color} ${opacity}`),
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#ffa726',
        },
        verticalLabelRotation: true, // Set to true for horizontal bar chart
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      horizontal // Make the bar chart horizontal
    />
    {/* Display prayer names with colored square boxes */}
    <View style={styles.prayerNamesContainer}>
      {monthlyPrayersData.labels.map((prayer, index) => (
        <View key={index} style={styles.prayerNameItem}>
          <View style={[styles.prayerColorBox, { backgroundColor: monthlyPrayersData.datasets[0].color[index] }]} />
          <Text style={styles.prayerNameText}>{prayer}</Text>
        </View>
      ))}
    </View>
    {/* Display the number of prayers offered */}
    <Text style={styles.offeredPrayersText}>Offered - 150/150 prayers</Text>
  </View>
);




const DateRangeScreen = () => (
  <View style={styles.container}>
    {/* Your Data Range Screen content */}
  </View>
);

const PreviousRecordScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'white', // text color for selected tab
      inactiveTintColor: 'black', // text color for other tabs
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
        elevation: 5,
      },
      indicatorStyle: {
        height: '100%', // make the indicator cover the whole tab
        borderRadius: 30, // round the corners of the selected tab
        background: 'linear-gradient(135deg, blue, purple, pink)', // Set background gradient
      },
      labelStyle: {
        fontWeight: 'bold', // Make the text bold for selected option
      },
    }}
  >
    <Tab.Screen name="Last 7 Days" component={Last7DaysScreen} />
    <Tab.Screen name="Monthly" component={MonthlyScreen} />
    <Tab.Screen name="Date Range" component={DateRangeScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
