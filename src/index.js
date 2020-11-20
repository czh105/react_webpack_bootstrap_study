import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuTab from './components/MenuTab/menuTab';
import HeaderMenu from './components/Header/header';
//import MyTask from './components/MyTask/myTask';
import DataAnalysis from './components/dataAnalysis/dataAnalysis';
ReactDOM.render(
  <React.StrictMode>
    <HeaderMenu />
  </React.StrictMode>,
  document.getElementById('navTab')
);
ReactDOM.render(
  <React.StrictMode>
    <MenuTab />
  </React.StrictMode>,
  document.getElementById('leftMenuTab')
);
ReactDOM.render(
  <React.StrictMode>
    <DataAnalysis />
  </React.StrictMode>,
  document.getElementById('container')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
