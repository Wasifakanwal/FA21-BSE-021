import React, { useEffect, useState } from 'react'; 
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
} from 'react-native'; 
import { 
  Accelerometer,
  Barometer,
  Gyroscope,
  Magnetometer,
  LightSensor,
  DeviceMotion,
  Pedometer,
} from 'expo-sensors'; 

const SensorsScreen = () => {
  const [sensorData, setSensorData] = useState({});

  const startSensor = async (sensorFunction) => {
    try {
      await sensorFunction();
    } catch (error) {
      console.error("Error accessing sensor:", error);
    }
  };

  // Accelerometer sensor
  const startAccelerometer = async () => {
    try {
      await Accelerometer.setUpdateInterval(1000);
      const subscription = Accelerometer.addListener((accelerometerData) => {
        setSensorData(accelerometerData);
      });
      return () => {
        subscription.remove();
      };
    } catch (error) {
      console.error("Error accessing accelerometer:", error);
    }
  };

  // Barometer sensor
  const startBarometer = async () => {
    try {
      await Barometer.setUpdateInterval(1000);
      const subscription = Barometer.addListener((barometerData) => {
        setSensorData(barometerData);
      });
      return () => {
        subscription.remove();
      };
    } catch (error) {
      console.error("Error accessing barometer:", error);
    }
  };

  // Gyroscope sensor
  const startGyroscope = async () => {
    try {
      await Gyroscope.setUpdateInterval(1000);
      const subscription = Gyroscope.addListener((gyroscopeData) => {
        setSensorData(gyroscopeData);
      });
      return () => {
        subscription.remove();
      };
    } catch (error) {
      console.error("Error accessing gyroscope:", error);
    }
  };

  // Magnetometer sensor
  const startMagnetometer = async () => {
    try {
      await Magnetometer.setUpdateInterval(1000);
      const subscription = Magnetometer.addListener((magnetometerData) => {
        setSensorData(magnetometerData);
      });
      return () => {
        subscription.remove();
      };
    } catch (error) {
      console.error("Error accessing magnetometer:", error);
    }
  };

  // Light sensor
  const startLightSensor = async () => {
    try {
      const data = await LightSensor.getLightAsync();
      setSensorData(data);
    } catch (error) {
      console.error("Error accessing light sensor:", error);
    }
  };

  // Device Motion sensor
  const startDeviceMotion = async () => {
    try {
      await DeviceMotion.setUpdateInterval(1000);
      const subscription = DeviceMotion.addListener((deviceMotionData) => {
        setSensorData(deviceMotionData);
      });
      return () => {
        subscription.remove();
      };
    } catch (error) {
      console.error("Error accessing device motion sensor:", error);
    }
  };

  // Pedometer sensor
  const startPedometer = async () => {
    try {
      const start = new Date();
      const end = new Date();
      start.setHours(0, 0, 0, 0);
      const data = await Pedometer.getStepCountAsync(start, end);
      setSensorData({ steps: data.steps });
    } catch (error) {
      console.error("Error accessing pedometer:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <View style={styles.container}> 
        <Text style={styles.titleText}>Sensors</Text> 

        {/* Accelerometer */}
        <TouchableOpacity onPress={() => startSensor(startAccelerometer)} style={styles.buttonStyle}> 
          <Text style={styles.buttonTextStyle}>Accelerometer</Text> 
          <Text style={styles.sensorData}>
            x: {sensorData.x?.toFixed(2)}, y: {sensorData.y?.toFixed(2)}, z: {sensorData.z?.toFixed(2)}
          </Text>
        </TouchableOpacity> 

        {/* Barometer */}
        <TouchableOpacity onPress={() => startSensor(startBarometer)} style={styles.buttonStyle}> 
          <Text style={styles.buttonTextStyle}>Barometer</Text> 
          <Text style={styles.sensorData}>Pressure: {sensorData.pressure}</Text>
        </TouchableOpacity>

        {/* Gyroscope */}
        <TouchableOpacity onPress={() => startSensor(startGyroscope)} style={styles.buttonStyle}> 
          <Text style={styles.buttonTextStyle}>Gyroscope</Text> 
          <Text style={styles.sensorData}>
            X: {sensorData.x?.toFixed(2)}, Y: {sensorData.y?.toFixed(2)}, Z: {sensorData.z?.toFixed(2)}
          </Text>
        </TouchableOpacity>

        {/* Magnetometer */}
        <TouchableOpacity onPress={() => startSensor(startMagnetometer)} style={styles.buttonStyle}> 
          <Text style={styles.buttonTextStyle}>Magnetometer</Text> 
          <Text style={styles.sensorData}>
            X: {sensorData.x?.toFixed(2)}, Y: {sensorData.y?.toFixed(2)}, Z: {sensorData.z?.toFixed(2)}
          </Text>
        </TouchableOpacity>

        {/* Light Sensor */}
        <TouchableOpacity onPress={() => startSensor(startLightSensor)} style={styles.buttonStyle}> 
          <Text style={styles.buttonTextStyle}>Light Sensor</Text> 
          <Text style={styles.sensorData}>Intensity: {sensorData.intensity}</Text>
        </TouchableOpacity>

        {/* Device Motion */}
        <TouchableOpacity onPress={() => startSensor(startDeviceMotion)} style={styles.buttonStyle}> 
          <Text style={styles.buttonTextStyle}>Device Motion</Text> 
          <Text style={styles.sensorData}>
            Rotation: {sensorData.rotation?.alpha}, {sensorData.rotation?.beta}, {sensorData.rotation?.gamma}
          </Text>
        </TouchableOpacity>

        {/* Pedometer */}
        <TouchableOpacity onPress={() => startSensor(startPedometer)} style={styles.buttonStyle}> 
          <Text style={styles.buttonTextStyle}>Pedometer</Text> 
          <Text style={styles.sensorData}>Steps: {sensorData.steps}</Text>
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
