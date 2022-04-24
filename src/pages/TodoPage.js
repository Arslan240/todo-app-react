import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { TaskContext } from '../TaskContext'

export default function Todo_page() {

  const {tasks, toggleComplete, deleteTask} = useContext(TaskContext)

  
  const tasksEl = tasks.map(task => (
      <div className="task" key={task.id}>
        <div className="task-main">
          {task.isCompleted
            ? <i className="ri-checkbox-circle-fill" onClick={() => toggleComplete(task.id)}></i>
            : <i className="ri-checkbox-circle-line" onClick={() => toggleComplete(task.id)}></i>
          }
          <span className="task-body">{task.task_body}</span>
        </div>
        <div className='task-icons-right'>
          <i className="ri-delete-bin-6-fill" onClick={() => deleteTask(task.id)}></i>
          <Link to='/edit' state={task}><i className="ri-pencil-line"></i></Link>
        </div>
      </div>
  ))
  
  return(
    <div className='tasks-container'>
      {tasksEl.length > 0 ? tasksEl : <h1>No tasks</h1>}
    </div>    
  )
}

// filled check box
// <i class="ri-checkbox-circle-fill"></i>
// unfilled check box
// <i class="ri-checkbox-circle-line"></i>

// pencil filled
// <i class="ri-pencil-fill"></i>
// pencil unfilled
// <i class="ri-pencil-line"></i>