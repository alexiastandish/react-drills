import React, { Component } from 'react'

class NewTask extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleAddToList = this.handleAddToList.bind(this)
  }

  handleInput(val) {
    this.setState({ userInput: val })
  }

  handleAddToList() {
    this.props.newTask(this.state.userInput)
    this.setState({ userInput: '' })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter New Task"
          value={this.state.userInput}
          onChange={event => this.handleInput(event.target.value)}
        />

        <button onClick={this.handleAddToList}>Add</button>
      </div>
    )
  }
}

export default NewTask
