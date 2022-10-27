import React, { Component } from 'react'
import TodoList from './TodoList';

export default class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      todos : ["Finish homework", "Wash dishes", "Clean room", "Make waffles"],
      todoInput: ''
    }
  }
  addTodo = todo =>{
    this.setState(prevState=>({
      todos: [...prevState.todos,todo],
    }))
  }
  deleteTodo = value =>{
    this.setState(prevState=>({
      todos : prevState.todos.filter(todoe => todoe!==value)
    }))
  }
  handleChange=(event)=>{
    this.setState({
      todoInput: event.target.value
    })
    console.log(this.state.todoInput)
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.addTodo(this.state.todoInput)
    this.setState({todoInput:''})
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} 
        deleteTodo={this.deleteTodo}/>
        <form onSubmit={this.handleSubmit}>     
        <input type='text' placeholder='Addtodo'
         value={this.state.todoInput}
         onChange={this.handleChange}
         />
        <input type='submit' value='Submit' />
        </form>
 
      </div>
    )
  }
}
