import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView,ImageBackground} from 'react-native';
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { CheckBox } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

 function PrayerScreen ({navigation,route}) {
  const date =route.params;
  const [prayerData, setPrayerData] = useState([-1,-1,-1,-1,-1]); 
  const [isSelectedFajrIndividual, setSelectionFajrIndividual] = useState(false);
  const [isSelectedFajrJammat, setSelectionFajrJammat] = useState(false);
  const [isSelectedDhuhrIndividual, setSelectionDhuhrIndividual] = useState(false);
  const [isSelectedDhuhrJammat, setSelectionDhuhrJammat] = useState(false);
  const [isSelectedAsrIndividual, setSelectionAsrIndividual] = useState(false);
  const [isSelectedAsrJammat, setSelectionAsrJammat] = useState(false);
  const [isSelectedMaghribIndividual, setSelectionMaghribIndividual] = useState(false);
  const [isSelectedMaghribJammat, setSelectionMaghribJammat] = useState(false);
  const [isSelectedIshaIndividual, setSelectionIshaIndividual] = useState(false);
  const [isSelectedIshaJammat, setSelectionIshaJammat] = useState(false);
  useEffect(() => {
    // Check if all checkboxes are checked
    const newPrayerData = [
      isSelectedFajrIndividual ? 0 : isSelectedFajrJammat ? 1 : -1,
      isSelectedDhuhrIndividual ? 0 : isSelectedDhuhrJammat ? 1 : -1,
      isSelectedAsrIndividual ? 0 : isSelectedAsrJammat ? 1 : -1,
      isSelectedMaghribIndividual ? 0 : isSelectedMaghribJammat ? 1 : -1,
      isSelectedIshaIndividual ? 0 : isSelectedIshaJammat ? 1 : -1,
    ];
    setPrayerData(newPrayerData);
    
    // Save to local storage
    try {
      AsyncStorage.getItem('prayerDates').then((dates) => {
        let prayerDates = {};
        if (dates !== null) {
          prayerDates = JSON.parse(dates);
        }
  
        // Update or insert new prayer data for the current date
        prayerDates[date] = newPrayerData;
  
        // Sort the prayer dates
        const sortedDates = Object.keys(prayerDates).sort((a, b) => new Date(a) - new Date(b));
  
        // Create a new object with sorted keys
        const sortedPrayerDates = {};
        sortedDates.forEach((key) => {
          sortedPrayerDates[key] = prayerDates[key];
        });
  
        AsyncStorage.setItem('prayerDates', JSON.stringify(sortedPrayerDates));
        console.log('Date and prayer data added to local storage in sorted order');
      });
    } catch (error) {
      console.log('Error in saving dates', error);
    }
  }, [
    isSelectedFajrIndividual,
    isSelectedFajrJammat,
    isSelectedDhuhrIndividual,
    isSelectedDhuhrJammat,
    isSelectedAsrIndividual,
    isSelectedAsrJammat,
    isSelectedMaghribIndividual,
    isSelectedMaghribJammat,
    isSelectedIshaIndividual,
    isSelectedIshaJammat,
  ]);
  const handleNavigateToStreak = () => {
   
      navigation.navigate('Streak');
  
  };

  return (
   
 
    <View style={styles.container}>
      {/* Fajr Prayer */}
      <View style={[styles.prayerContainer, { width: '80%' }]}>
        <View style={styles.leftContent}>
          <Text style={styles.urduText}>فجر</Text>
          <Text style={styles.englishText}>Fajr</Text>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedFajrIndividual}
              onValueChange={(value) => {
                setSelectionFajrIndividual(value);
               
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedFajrJammat}
              onValueChange={(value) => {
                setSelectionFajrJammat(value);
               
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={[styles.icon, { height: 60 }]} source={require('./assets/Jamat.png')} />
        </View>
      </View>
      {/* Dhuhr Prayer */}
      <View style={[styles.prayerContainer, { width: '80%' }]}>
        <View style={styles.leftContent}>
          <Text style={styles.urduText}>ظهر</Text>
          <Text style={styles.englishText}>Dhuhr</Text>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedDhuhrIndividual}
              onValueChange={(value) => {
                setSelectionDhuhrIndividual(value);
               
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedDhuhrJammat}
              onValueChange={(value) => {
                setSelectionDhuhrJammat(value);
               
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={[styles.icon, { height: 60 }]} source={require('./assets/Jamat.png')} />
        </View>
      </View>
      {/* Asr Prayer */}
      <View style={[styles.prayerContainer, { width: '80%' }]}>
        <View style={styles.leftContent}>
          <Text style={styles.urduText}>عصر</Text>
          <Text style={styles.englishText}>Asr</Text>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedAsrIndividual}
              onValueChange={(value) => {
                setSelectionAsrIndividual(value);
                
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedAsrJammat}
              onValueChange={(value) => {
                setSelectionAsrJammat(value);
               
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={[styles.icon, { height: 60 }]} source={require('./assets/Jamat.png')} />
        </View>
      </View>
      {/* Maghrib Prayer */}
      <View style={[styles.prayerContainer, { width: '80%' }]}>
        <View style={styles.leftContent}>
          <Text style={styles.urduText}>مغرب</Text>
          <Text style={styles.englishText}>Maghrib</Text>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedMaghribIndividual}
              onValueChange={(value) => {
                setSelectionMaghribIndividual(value);
                
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedMaghribJammat}
              onValueChange={(value) => {
                setSelectionMaghribJammat(value);
              
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={[styles.icon, { height: 60 }]} source={require('./assets/Jamat.png')} />
        </View>
      </View>
      {/* Isha Prayer */}
      <View style={[styles.prayerContainer, { width: '80%' }]}>
        <View style={styles.leftContent}>
          <Text style={styles.urduText}>عشاء</Text>
          <Text style={styles.englishText}>Isha</Text>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedIshaIndividual}
              onValueChange={(value) => {
                setSelectionIshaIndividual(value);
                
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedIshaJammat}
              onValueChange={(value) => {
                setSelectionIshaJammat(value);
                
              }}
              style={styles.checkbox}
            />
          </View>
          <Image style={[styles.icon, { height: 60 }]} source={require('./assets/Jamat.png')} />
        </View>
      </View>
      
      {/* Button to navigate to Streak screen */}
      <TouchableOpacity style={styles.streakButton} onPress={handleNavigateToStreak}>
        <Text style={styles.streakButtonText}>Go to Streak Page</Text>
      </TouchableOpacity>
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
  backgroundImage: {
    flex: 1,
    justifyContent:"center",
    width: '100%', // Ensure the image covers the entire width of the screen
    height: '100%',
    
  },
  prayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
   shadowRadius: 3.84,
    
  },
  leftContent: {
    marginRight: 10,
  },
  urduText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  englishText: {
    fontSize: 12,
    color: 'gray',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50, 
  },
  icon: {
    width: 50,
    height: 70,
    marginHorizontal: 5,
  },
  checkbox: {
    marginRight: 5, 
  },
  streakButton: {
    
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  streakButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PrayerScreen;
