import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//  All data pertaining to each task
const TASK_DATA= []

//                                Render  
ReactDOM.render(
  <React.StrictMode>
    <App taskData = {TASK_DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
