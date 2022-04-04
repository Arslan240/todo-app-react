import React from 'react';
import {Route, Link, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import CreateTask from './pages/CreateTask';

function App() {
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
          </Routes>
          <Link to='/create'><div className="btn new-task-btn">Create New Task</div></Link>
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
