import nanoId from "nano-id";
import React, { useState, useContext } from "react";
import { TaskContext } from "../TaskContext";

export default function CreateTask() {
  const {addNewTask, setShowTodos} = useContext(TaskContext)
  const [formInput, setFormInput] = useState('')

  function handleInput(event) {
    const {value} = event.target
    setFormInput(value)
  }
  


  return(
    <div className="form">
      <input 
        type="text" 
        name="task" 
        placeholder="Task"
        value={formInput}
        onChange={handleInput}/>
      <button onClick={() => {
          addNewTask(formInput) 
          setShowTodos(false)
        }
      }
      >
        Create
      </button>
    </div>
  )
}