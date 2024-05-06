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
 
const Login= ({navigation}) => { 
  const [textEmailValue, setTextEmailValue] = useState(''); 
  const [textPasValue, setTextPasValue] = useState(''); 
   
 
  const CompareFunction = async () => { 
   
    
     if(textEmailValue,textPasValue){
       const response=  await AsyncStorage.multiGet(['Email','Password']); 
       
       if (Array.isArray(response)) {
        console.log(response);
        const [email, pasword] = response.map(([key, value]) => value);
           if(email==textEmailValue && pasword==textPasValue){
            alert('Logged in succesfully'); 
           }
           
      setTextEmailValue(''); 
      setTextPasValue(''); 
        } 
     }
     else { 
      alert('login failed'); 
    } 
  }; 
 const NavigateFunction=()=>{
    navigation.navigate('Register');
 };
  
 
  return (
    <SafeAreaView style={{ flex: 1 }}> 
    <View style={styles.container}> 
      <Text style={styles.titleText}> 
        Registration Page
      </Text> 
      
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
     
      <TouchableOpacity 
        onPress={CompareFunction} 
        style={styles.buttonStyle}> 
        <Text style={styles.buttonTextStyle}> Login</Text> 
      </TouchableOpacity> 

     
      <TouchableOpacity 
        onPress={NavigateFunction} 
        style={styles.buttonStyle}> 
        <Text style={styles.buttonTextStyle}> Sign up</Text> 
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
  marginBottom:10,
  width: '100%', 
  borderWidth: 1, 
  borderColor: 'green', 
  }, 
  }); 
  export default Login; 