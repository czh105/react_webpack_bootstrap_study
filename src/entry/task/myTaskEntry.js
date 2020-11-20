import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import MenuTab from '../../components/MenuTab/menuTab';
import HeaderMenu from '../../components/Header/header';
import MyTask from '../../components/MyTask/myTask';
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
    <MyTask />
  </React.StrictMode>,
  document.getElementById('container')
)