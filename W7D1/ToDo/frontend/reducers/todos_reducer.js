
import {RECEIVE_TODO,RECEIVE_TODOS} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


export const todosReducer = (state = initialState, action) => {
  switch(action.type){
    // case RECEIVE_TODO:
    // return  [...state,action.todo];
    
    default:
    return state;
  }
};

