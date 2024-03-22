import React, {StatusBar, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput ,FlatList} from 'react-native';

export default function ToDoList() {
  const [task, setTask] = useState(''); 
  const [listOfTask, setListOfTask] = useState([ ]);


  const TextChange= (text) => {
    setTask(text); 
  };

  const AddTask = () => {
    if (task !== '') { 
        setListOfTask([...listOfTask, 
          { id: listOfTask.length + 1, title: task }
        ]);
        setTask(''); 
      }
  };

  const EditTask = (title) => {
    console.log('Edit task with ID:', title);
    DelTask(title);
    setTask(title);

     
  };

  const DelTask = (title) => {
   
    console.log('Delete task with ID:', title);
    const modifiedList=listOfTask.filter(item=>item.title!==title);
     setListOfTask(modifiedList);
  };

  const Item = ({item}) => (
    
    <View style={styles.item}>
        
      <Text style={styles.title}>{item.title}</Text> 
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => EditTask(item.title)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => DelTask(item.title)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      
      </View>
  );
  return (
    <View >  
      <Text style={styles.heading}>TO DO APPLICATION</Text>
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Add your task'
        onChangeText={TextChange}
        value={task} 
      />
      <Button style={styles.button} title="Add Task" color="#e9967a" onPress={AddTask} />
      </View>
      <View >
      <FlatList 
        data={listOfTask}
        renderItem={Item}
        keyExtractor={item => item.id.toString()}
        
       
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
    heading:{
      textAlign:"center",
      marginTop:500,
      marginBottom:50,
      fontWeight:"bold",
      fontStyle:"italic",
      fontSize:30
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',   
        justifyContent: 'center',

    },
    list:{
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
    },
  input: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight:10,
    paddingHorizontal: 10,
    alignItems:'center',
    
  },
  item: {
    borderRadius:6,
    paddingVertical:8,
    height:50,
    marginVertical:10,
    alignItems:"center",
    backgroundColor:"#bc8f8f",
    flexDirection:"row",
    marginRight:2,
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
    
  },
  title: {
    fontSize: 16,
    fontWeight:"bold",
    color:"black"
  },
  button: {
    backgroundColor: '#ffe4c4',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems:"stretch",
   
  },
  
 
});
