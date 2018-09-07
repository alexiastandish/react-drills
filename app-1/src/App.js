import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  render() {
    return (
      <div className="App">
        <h1>App 1</h1>
        <input type="text" onChange={event => this.handleChange(event.target.value)} />
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}

export default App
