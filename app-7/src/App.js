import React, { Component } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import List from './components/List'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
    }
    this.handleEntry = this.handleEntry.bind(this)
  }

  handleEntry(userInput) {
    const { tasks } = this.state
    const copyArray = [...tasks, userInput]
    this.setState({ tasks: copyArray })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>ToDo list 2</h1>
        <NewTask newTask={this.handleEntry} />
        <List tasks={this.state.tasks} />
      </div>
    )
  }
}
