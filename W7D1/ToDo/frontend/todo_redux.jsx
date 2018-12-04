import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveToDo,receiveToDos} from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded",()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveToDo = receiveToDo;
  window.receiveToDos = receiveToDos;
  ReactDOM.render(<h1>Todos App</h1>, root);
});


