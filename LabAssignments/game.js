import { StatusBar } from 'expo-status-bar'; 
import React, { useState } from 'react'; 
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'; 
 
export default function Task() { 
 
  const [getCount, setCount] = useState(''); 
  const UpdateNumberInput = (num) => {
    setCount(num);
  };
  const array=[0,1,2,3,4,5,6,7,8,9];
 
  return ( 
    <View style={styles.container}> 
      <Text style={{fontSize:18, fontWeight:'bold'}}>NUMBER Game
Application</Text> 
<TextInput style={styles.input} value={getCount}
        onChangeText={setCount}></TextInput>

 <View style={styles.just} flexDirection='row'> 
    <>
        {array.map(x => (
          <Button  key={x} title={x.toString()} color='red'  
          onPress={() => {
              UpdateNumberInput(x.toString());
            }}
          />
        ))}
      </>
      </View> 
      <StatusBar style="auto" /> 
    </View> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  just: { 
    padding:10, 
    justifyContent:'space-evenly' 
}, 
input:{
  borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%', // Adjust width as needed
    padding: 10,
    margin: 20, 
    textAlign:'center'
}

}); 
