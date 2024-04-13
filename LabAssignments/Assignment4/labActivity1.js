import * as React from 'react'; 
import { View, Text ,Button} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
 
function HomeScreen({navigation}) { 
    return ( 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
        <Text>Home Screen</Text> 
        <Button title="Go to screen 2" onPress={()=> navigation.navigate
   ("Details")}> </Button> 
      </View> 
    ); 
  } 
function ContactDetailsPage() { 
    return ( 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
        <Text>Details Screen</Text> 
      </View> 
  
      ); 
    } 
    const Stack = createStackNavigator(); 
    function App() { 
    return ( 
    <NavigationContainer> 
    <Stack.Navigator initialRouteName="Home"> 
    <Stack.Screen name="Home" component={HomePage} /> 
    <Stack.Screen name="Details" component={ProductDetailsPage} /> 
    </Stack.Navigator> 
    </NavigationContainer> 
    ); 
    } 
    export default App; 