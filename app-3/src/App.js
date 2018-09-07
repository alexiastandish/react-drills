import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(filter) {
    this.setState({ userInput: filter })
  }

  render() {
    const { foods, userInput } = this.state
    let filteredFoods = foods
      .filter(element => element.includes(userInput))
      .map(function(element, index) {
        return <h2 key={index}>{element}</h2>
      })

    return (
      <div className="App">
        <h1>App 3</h1>
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <div> {filteredFoods}</div>
      </div>
    )
  }
}

export default App
