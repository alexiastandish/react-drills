import React, { Component } from 'react'

import './App.css'
import Todo from './components/Todo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
      userInput: '',
    }
    this.handleEntry = this.handleEntry.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(val) {
    this.setState({ userInput: val })
  }

  handleEntry() {
    const { userInput, tasks } = this.state
    const copyArray = [...tasks, userInput]
    this.setState({ tasks: copyArray, userInput: '' })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>ToDo list</h1>
        <input
          type="text"
          placeholder="Enter New Task"
          value={this.state.userInput}
          onChange={event => this.handleInput(event.target.value)}
        />
        <button onClick={this.handleEntry}>Submit</button>
        {this.state.tasks.map(function(element) {
          return <Todo task={element} />
        })}
      </div>
    )
  }
}

export default App
