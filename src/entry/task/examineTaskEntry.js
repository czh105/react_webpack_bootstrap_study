import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import MenuTab from '../../components/MenuTab/menuTab';
import HeaderMenu from '../../components/Header/header';
import TaskExammine from '../../components/taskExamine/taskExamine';
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
    <TaskExammine />
  </React.StrictMode>,
  document.getElementById('container')
)