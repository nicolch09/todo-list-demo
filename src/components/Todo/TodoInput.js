import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';

export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  render() {
    return (
      <div className="todo-input" >
        <Input placeholder="Input your todos" value={this.state.inputValue} onChange={this.handleInputChange} />
        <Button type = "primary" onClick={this.dispatch}>add</Button>
      </div>
    )
  }
}
