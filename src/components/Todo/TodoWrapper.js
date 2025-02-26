import React, {Component} from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos'
import TodoResource from '../../api/TodoResource';

export default class TodoWrapper extends Component {

  componentDidMount() {
    TodoResource.getAll()
      .then(res => res.json())
      .then(res => {
        console.log("todos res:", res._embedded.todos);
        this.props.refreshTodos( res._embedded.todos)
      })
  }

  addNewTodo = newTodoContent => {
    if(newTodoContent) {
      this.props.createNewTodo(newTodoContent);
    }
  };

    patchStatus = todo => {
        this.props.patchStatus(todo);
    }

  render() {
    return (
      <div className="todo-wrapper">
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
          <Todos todos={this.props.todos} patchStatus={this.patchStatus}/>
      </div>
    )
  }
}
