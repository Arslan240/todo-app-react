import React, { createContext,useEffect,useState } from "react";
import nanoId from 'nano-id'

const TaskContext = createContext()

function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([])
  const [showTodos, setShowTodos] = useState(false) //to show all tasks while editing or creating a task

  console.log(tasks);
  function toggleComplete(clicked_id) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        return task.id === clicked_id 
        ? {...task, isCompleted: !task.isCompleted}
        : {...task}
      })
    })
  }

  function addNewTask(task){
    const newTask = {
      id: nanoId(),
      task_body: task,
      isCompleted: false
    }
    // console.log(newTask);
    setTasks(prevTasks => {
      return ([...prevTasks, newTask])
    })
  }



  function editTask({task_body, id}){
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        return task.id === id 
          ? {...task, task_body }
          : {...task}
      })
    })
  }

  function deleteTask(taskID){
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskID))
  }

  // gets stored tasks from local storage and sets the state
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if(storedTasks){
      setTasks(JSON.parse(storedTasks))
      console.log('stored task', JSON.parse(storedTasks))
    }
  },[])
  
  // Whenever tasks state changes it updates the localstorage 
  useEffect(() => { 
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log('stored to local storage');
  },[tasks])
  console.log(tasks);

  return(
    <TaskContext.Provider value={{
      tasks,
      setTasks,
      toggleComplete,
      addNewTask,
      editTask,
      deleteTask,
      showTodos,
      setShowTodos
    }}>
      {props.children}
    </TaskContext.Provider>
  )
  
}

export {TaskContextProvider, TaskContext}

// [
//   {
//     id: nanoId(),
//     task_body: 'Work on Formal Methods',
//     isCompleted: false
//   },
//   {
//     id: nanoId(),
//     task_body: 'React Practice',
//     isCompleted: true
//   }
// ]