import React, { Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
    }
  }
  render() {
    const { array } = this.state
    let arrayList = array.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <h1>App 2</h1>
        {arrayList}
      </div>
    )
  }
}

export default App
