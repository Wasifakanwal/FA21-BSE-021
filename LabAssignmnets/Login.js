import { StatusBar } from 'expo-status-bar'; 
import React, { useState } from 'react'; 
import { Button, StyleSheet, Text, TextInput, View ,Alert} from 'react-native'; 

export default function Login() { 

    const[username,setName]=useState('');
    const[pasword,setpasword]=useState('');
    const[DisableButton,setbutton]=useState(true);

    const ChangeUserName=(input)=>{
        setName(input);
        setbutton(username== '' || pasword=='' );

    };
    const ChangePassword = (input) => {
        setpasword(input);
        setbutton(username== '' || pasword=='' );
      };
    
      const Submithandler = () => {
        if (username == 'wasifa' && pasword =='2021' ) {
          Alert.alert('Success login');
        } else {
          Alert.alert('Incorrect username or password');
        }
      };



    return ( 
       
        <View style={styles.container}>
      <Text style={styles.Heading}>LOGIN</Text>
      <Text style={styles.label}>USERNAME :</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={ChangeUserName}
        value={username}
      />
      <Text style={styles.label}>PASSWORD : </Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={ChangePassword}
        value={pasword}
        secureTextEntry={true}
      />
      <View style={styles.butn}>
      <Button 
        title="Submit"
        color="blue"
        onPress={Submithandler}
        disabled={DisableButton}></Button>
    
     </View>
     </View>
   
          );
}



const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      backgroundColor: '#fff', 
      marginTop:100 
    }, 
    Heading:{

      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      marginTop:5,
      marginBottom:60

    },
    inputContainer: {
       
        marginBottom: 20,
      },
      label: {
        marginRight: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: 200, 
      },
      butn:{
        color:"blue",
        marginBottom:10,
        marginTop:10,
        alignSelf  :'flex-end'
   
    }

}); 