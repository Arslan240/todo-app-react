import React, { useContext } from 'react'
import { TaskContext } from '../TaskContext'

export default function Home() {
  const {tasks} = useContext(TaskContext)

  const length = tasks.length
  const comp_tasks = (tasks.filter(task => task.isCompleted === true)).length

  return(
    <div className="stats-flex">
      <div className="stats-container">
        <div className="stats">{length}   Todo Tasks</div>
        <div className="stats">{comp_tasks}   Completed Task</div>
      </div>
    </div>
  )
}