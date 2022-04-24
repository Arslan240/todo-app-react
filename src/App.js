import React, { useContext } from 'react';
import {Route, Link, Routes, useLocation} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';
import { TaskContext } from './TaskContext';

function App() {
  const {showTodos, setShowTodos} = useContext(TaskContext)
  const location = useLocation()
  const {state} = location
   

  return (
    <main>
      <div className="top-nav">
        <Link to='/'><div className="btn">Home</div></Link>
        <Link to='/todos'><div className="btn">Todos</div></Link>
      </div>

      <div className="main-body">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/todos' element={<TodoPage />}/>
            <Route path='/create' element={<CreateTask />}/>
            <Route path='/edit' element={<EditTask task={state}/>}/>
          </Routes>
          {showTodos && 
            <Routes>
              <Route path='/todos'/>
            </Routes>
          }
          <Link to='/create'>
            <div className="btn new-task-btn"
              onClick={()=> setShowTodos(true)}
            >
              Create New Task
            </div>
          </Link>
      </div>
    </main>



    // <div>
    //   <Link to='/'><button>Homepage</button></Link>
    //   <Link to='/todos'><button>Todos</button></Link>
      // <Routes>
      //   <Route path='/' element={<Home />}/>
      //   <Route path='/todos' element={<TodoPage />}/>
      // </Routes>
    // </div>
  );
}

export default App;
