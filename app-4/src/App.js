import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <h1>App 4</h1>
        <Login />
      </div>
    )
  }
}

export default App
