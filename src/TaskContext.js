import React, { createContext,useState } from "react";
import nanoId from 'nano-id'

const TaskContext = createContext()

function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([
    {
      id: nanoId(),
      task_body: 'Work on Formal Methods',
      isCompleted: false
    },
    {
      id: nanoId(),
      task_body: 'React Practice',
      isCompleted: true
    }
  ])

  function toggleComplete(clicked_id) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        return task.id === clicked_id 
        ? {...task, isCompleted: !task.isCompleted}
        : {...task}
      })
    })
  }

  return(
    <TaskContext.Provider value={{
      tasks,setTasks, toggleComplete
    }}>
      {props.children}
    </TaskContext.Provider>
  )
  
}

export {TaskContextProvider, TaskContext}