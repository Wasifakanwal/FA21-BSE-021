import React, { useEffect, useState } from 'react'; 
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
} from 'react-native'; 


const SensorsScreen = (navigation) => {
  

  

  // Accelerometer sensor
  const startAccelerometer = () => {
   navigation.navigate('Acclometer');
  };

  // Barometer sensor
  const startBarometer = () => {
    navigation.navigate('Baromter');
  };

  // Gyroscope sensor
  const startGyroscope =  () => {
    navigation.navigate('Gyrometr');
  };

  // Magnetometer sensor
  const startMagnetometer =  () => {
    navigation.navigate('Magnetomertr');
  };

  // Light sensor
  const startLightSensor =  () => {
    navigation.navigate('Light');
  };

  // Device Motion sensor
  const startDeviceMotion =  () => {
    navigation.navigate('Motion');
  };

  // Pedometer sensor
  const startPedometer =  () => {
    navigation.navigate('Pedometr');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <View style={styles.container}> 
        <Text style={styles.titleText}>Sensors</Text> 

        {/* Accelerometer */}
        <TouchableOpacity onPress={() => startAccelerometer} style={styles.buttonStyle}> 
         
        </TouchableOpacity> 

        {/* Barometer */}
        <TouchableOpacity onPress={() => startBarometer} style={styles.buttonStyle}> 
          
        </TouchableOpacity>

        {/* Gyroscope */}
        <TouchableOpacity onPress={() => startGyroscope} style={styles.buttonStyle}> 
          
        </TouchableOpacity>

        {/* Magnetometer */}
        <TouchableOpacity onPress={() => startMagnetometer} style={styles.buttonStyle}> 
         
        </TouchableOpacity>

        {/* Light Sensor */}
        <TouchableOpacity onPress={() => startLightSensor} style={styles.buttonStyle}> 
         
        </TouchableOpacity>

        {/* Device Motion */}
        <TouchableOpacity onPress={() => startDeviceMotion} style={styles.buttonStyle}> 
     
        </TouchableOpacity>

        {/* Pedometer */}
        <TouchableOpacity onPress={() => startPedometer} style={styles.buttonStyle}> 
        
        </TouchableOpacity>
      </View> 
    </SafeAreaView> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  titleText: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    paddingVertical: 20, 
  }, 
  buttonStyle: { 
    fontSize: 16, 
    color: 'white', 
    backgroundColor: 'blue', 
    padding: 10, 
    marginTop: 12, 
    minWidth: 250, 
    alignItems: 'center',
  }, 
  buttonTextStyle: { 
    padding: 5, 
    color: 'white', 
    textAlign: 'center', 
  }, 
  sensorData: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default SensorsScreen;
