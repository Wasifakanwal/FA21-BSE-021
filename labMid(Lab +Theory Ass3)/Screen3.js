import React ,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle, Text as SvgText, Defs } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StreakScreen = ({navigation }) => {
    const [streakCount, setStreakCount] = useState(0);

  useEffect(() => {
    const fetchPrayerData = async () => {
      try {
        const prayerDates = await AsyncStorage.getItem('prayerDates');
        if (prayerDates !== null) {
          const dates = Object.keys(JSON.parse(prayerDates)).sort();
          
          let streak = 0;
          let today = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format
          for (let i = 0; i < dates.length; i++) {
            if (dates[i] !== today) {
              const prayerData = JSON.parse(prayerDates)[dates[i]];
              if (prayerData.every(val => val === 0 || val === 1)) {
                streak++;
              } else {
                streak = 0;
              }
            
            }
          }
          setStreakCount(streak);
        }
      } catch (error) {
        console.error('Error fetching prayer data:', error);
      }
    };

    fetchPrayerData();
  }, []);
    return (
       
        <View style={styles.container}>
            {/* Menu Button */}
            <TouchableOpacity style={styles.menuButton}>
                <View style={styles.menuBar}></View>
                <View style={styles.menuBar}></View>
                <View style={styles.menuBar}></View>
            </TouchableOpacity>

            {/* Circle with Streak */}
            <View style={styles.circleContainer}>
                <Svg height="200" width="200">
                    {/* Outer Circle with Gray Border */}
                    <Defs>
                        <filter id="shadowOuter">
                            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="darkgrey" />
                        </filter>
                        
                    </Defs>
                    {/* Outer Circle with Shadow */}
                    <Circle cx="100" cy="100" r="80" fill="white" stroke="#E5E4E2" strokeWidth="11" filter="url(#shadowOuter)" />
                    
                    {/* Streak text */}
                    <SvgText
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="grey"
                        fontSize={15}
                        fontWeight="bold"
                        dx="-3"
                        dy="3"
                    >
                        Streak
                    </SvgText>
                    {/* Streak count number */}
                    <SvgText
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="black"
                        fontSize={30}
                        fontWeight="bold"
                        dx="-5"
                        dy="35"
                    >
                        {streakCount}
                    </SvgText>
                </Svg>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white",
    },
   
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    menuButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 5,
    },
    menuBar: {
        width: 20,
        height: 3,
        backgroundColor: 'black',
        marginVertical: 2,
    },
    circleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
});

export default StreakScreen;
