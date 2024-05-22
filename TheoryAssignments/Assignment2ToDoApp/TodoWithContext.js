// src/ToDoList.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { TaskContext } from './context';

const ToDoListC = () => {
  const { task, setTask, listOfTask, addTask, editTask, delTask } = useContext(TaskContext);

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => editTask(item.title)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => delTask(item.title)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.heading}>TO DO APPLICATION</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Add your task'
          onChangeText={setTask}
          value={task}
        />
        <Button title="Add Task" color="#e9967a" onPress={addTask} />
      </View>
      <FlatList
        data={listOfTask}
        renderItem={Item}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 30
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
export default ToDoListC;