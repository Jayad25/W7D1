import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  
  render() {
    return (
      <div className="todolist">
  
        {this.props.todos.map( todo => <li key={todo.id}><TodoListItem props={todo}/></li>)}
        <br/>
        <hr/>
        
        <TodoForm />
      
      </div>
    );
  }
}

export default TodoList;