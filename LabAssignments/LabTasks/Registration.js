import React, { useState } from 'react'; 
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  TextInput, 
  Text, 
  TouchableOpacity, 
} from 'react-native'; 
 
import AsyncStorage from '@react-native-community/async-storage'; 
 
const Registration= ({navigation}) => { 
  const [textEmailValue, setTextEmailValue] = useState(''); 
  const [textPasValue, setTextPasValue] = useState(''); 
  const [textNameValue, setTextNameValue] = useState(''); 
  const [textConfPasValue, setTextConfPasValue] = useState(''); 
  const [getValue, setGetValue] = useState(''); 
 
  const saveValueFunction = () => { 
    if (textEmailValue,textConfPasValue,textPasValue,textNameValue) { 
      AsyncStorage.setItem('Name', textNameValue); 
      AsyncStorage.setItem('Email', textEmailValue); 
      AsyncStorage.setItem('Password', textPasValue); 
      AsyncStorage.setItem('ConfPas', textConfPasValue); 

      setTextEmailValue(''); 
      setTextPasValue(''); 
      setTextConfPasValue(''); 
      setTextNameValue(''); 
      alert('Data Saved'); 
    } else { 
      alert('Please fill data'); 
    } 
  }; 
 
  const NavigateFunction=()=>{
    navigation.navigate('Login');
 };
 
  return (
    <SafeAreaView style={{ flex: 1 }}> 
    <View style={styles.container}> 
      <Text style={styles.titleText}> 
        Registration Page
      </Text> 
      <TextInput 
        placeholder="User Name" 
        value={textNameValue} 
        onChangeText={(data) => setTextNameValue(data)} 
        underlineColorAndroid="transparent" 
        style={styles.textInputStyle} 
      /> 
      <TextInput 
        placeholder="Email" 
        value={textEmailValue} 
        onChangeText={(data) => setTextEmailValue(data)} 
        underlineColorAndroid="transparent" 
        style={styles.textInputStyle} 
      /> 
      <TextInput 
        placeholder="Password" 
        value={textPasValue} 
        onChangeText={(data) => setTextPasValue(data)} 
        underlineColorAndroid="transparent" 
        style={styles.textInputStyle} 
      /> 
      <TextInput 
        placeholder="Confirm Password" 
        value={textConfPasValue} 
        onChangeText={(data) => setTextConfPasValue(data)} 
        underlineColorAndroid="transparent" 
        style={styles.textInputStyle} 
      /> 
      <TouchableOpacity 
        onPress={saveValueFunction} 
        style={styles.buttonStyle}> 
        <Text style={styles.buttonTextStyle}> Register</Text> 
      </TouchableOpacity> 
      <TouchableOpacity onPress={NavigateFunction} style={styles.buttonStyle}> 
        <Text style={styles.buttonTextStyle}> Login  </Text> 
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
}, 
titleText: { 
  fontSize: 22, 
  fontWeight: 'bold', 
  textAlign: 'center', 
  paddingVertical: 20, 
}, 
textStyle: { 
  padding: 10, 
  textAlign: 'center', 
}, 
buttonStyle: { 
  fontSize: 16, 
  color: 'white', 
  backgroundColor: 'blue', 
  padding: 5, 
  marginTop: 32, 
  minWidth: 250, 
  }, 
  buttonTextStyle: { 
  padding: 5, 
  color: 'white', 
  textAlign: 'center', 
  }, 
  textInputStyle: { 
  textAlign: 'center', 
  height: 40, 
  width: '100%', 
  borderWidth: 1,
  marginBottom:10, 
  borderColor: 'green', 
  }, 
  }); 
  export default Registration; 