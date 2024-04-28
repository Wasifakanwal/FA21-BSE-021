import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView,ImageBackground} from 'react-native';
import CheckBox from 'expo-checkbox';
//import { CheckBox } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

 function PrayerScreen ({navigation}) {
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
  const [streakCount, setStreakCount] = useState(0); // State to track streak count
  

  useEffect(() => {
    // Check if all checkboxes are checked
    if (
      (isSelectedFajrIndividual || isSelectedFajrJammat) &&
      (isSelectedDhuhrIndividual || isSelectedDhuhrJammat) &&
      (isSelectedAsrIndividual || isSelectedAsrJammat) &&
      (isSelectedMaghribIndividual || isSelectedMaghribJammat) &&
      (isSelectedIshaIndividual || isSelectedIshaJammat)
    ) {
      // Update streak count to 1 if all prayers are checked
      setStreakCount(1);
    } else {
      // Otherwise, set streak count to 0
      setStreakCount(0);
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
   // if (streakCount === 1) { // Only navigate if streak count is 1
      navigation.navigate('Streak', { streakCount });
   // }
  };

  return (
   <ImageBackground source={require('./assets/bg2.jpg')} // Provide the path to your background image
   style={styles.backgroundImage}
   resizeMode='cover'
   
 >
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
              onValueChange={setSelectionFajrIndividual}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedFajrJammat}
              onValueChange={setSelectionFajrJammat}
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
              onValueChange={setSelectionDhuhrIndividual}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedDhuhrJammat}
              onValueChange={setSelectionDhuhrJammat}
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
              onValueChange={setSelectionAsrIndividual}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedAsrJammat}
              onValueChange={setSelectionAsrJammat}
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
              onValueChange={setSelectionMaghribIndividual}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedMaghribJammat}
              onValueChange={setSelectionMaghribJammat}
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
              onValueChange={setSelectionIshaIndividual}
              style={styles.checkbox}
            />
          </View>
          <Image style={styles.icon} source={require('./assets/individual.png')} />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedIshaJammat}
              onValueChange={setSelectionIshaJammat}
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
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
