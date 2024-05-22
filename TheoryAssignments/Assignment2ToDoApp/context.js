// src/TaskContext.js
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState('');
  const [listOfTask, setListOfTask] = useState([]);

  const addTask = () => {
    if (task !== '') {
      setListOfTask([...listOfTask, { id: listOfTask.length + 1, title: task }]);
      setTask('');
    }
  };

  const editTask = (title) => {
    delTask(title);
    setTask(title);
  };

  const delTask = (title) => {
    const modifiedList = listOfTask.filter(item => item.title !== title);
    setListOfTask(modifiedList);
  };

  return (
    <TaskContext.Provider value={{ task, setTask, listOfTask, addTask, editTask, delTask }}>
      {children}
    </TaskContext.Provider>
  );
};
