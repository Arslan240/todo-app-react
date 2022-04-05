import React,{useContext, useState} from "react";
import { TaskContext } from "../TaskContext";

export default function EditTask(props) {

  const task = props.task
  const {editTask} = useContext(TaskContext)
  const [formInput, setFormInput] = useState(task.task_body)
  
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
      <button onClick={() => editTask({task_body:formInput,id:task.id})}>Update</button>
    </div>
  )
} 