import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { TaskContextProvider } from './TaskContext';


ReactDOM.render(
  <React.StrictMode>
    <TaskContextProvider>
      <Router>
        <App />
      </Router>
    </TaskContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


