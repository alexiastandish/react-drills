import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    // whenever you render things from an API you put it in your state... and then you render from state
    this.state = {
      obiWanKenobi: {},
      obiWanHomeWorld: '',
      obiWanHomeWorldGravity: '',
    }

    this.updateObiWanState = this.updateObiWanState.bind(this)
    this.getObiWanHomeWorld = this.getObiWanHomeWorld.bind(this)
    this.updateObiWanHomeWorld = this.updateObiWanHomeWorld.bind(this)
  }

  // react lifecycle - componentDidMount will always be used if you're making a component API request
  componentDidMount() {
    axios
      .get('https://swapi.co/api/people')
      .then(this.findObiWan)
      .then(this.updateObiWanState)
      .then(this.getObiWanHomeWorld)
  }

  findObiWan(response) {
    // filter through response.data for obiWan
    return response.data.results.filter(character => character.name === 'Obi-Wan Kenobi')[0]
  }

  updateObiWanState(obiWan) {
    this.setState({ obiWanKenobi: obiWan })
    console.log('obiWan', obiWan)
    return obiWan.homeworld
  }

  getObiWanHomeWorld(obiWanHomeWorld) {
    console.log('obiWanHomeWorld', obiWanHomeWorld)
    axios.get(obiWanHomeWorld).then(this.updateObiWanHomeWorld)
  }

  updateObiWanHomeWorld(updatedObiWanHomeWorld) {
    console.log(updatedObiWanHomeWorld.data)
    this.setState({
      obiWanHomeWorld: updatedObiWanHomeWorld.data.name,
      obiWanHomeWorldGravity: updatedObiWanHomeWorld.data.gravity,
    })
  }

  render() {
    // console.log(this.state)

    return (
      <div className="App">
        <h1>App 8</h1>
        <p>Name: {this.state.obiWanKenobi.name}</p>
        <p>Home World: {this.state.obiWanHomeWorld}</p>
        <p>Birthyear: {this.state.obiWanKenobi.birth_year}</p>
        <p>Home World Gravity: {this.state.obiWanHomeWorldGravity}</p>
      </div>
    )
  }
}

export default App
