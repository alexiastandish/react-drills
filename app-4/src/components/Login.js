import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      userLogin: '',
      userPassword: '',
    }

    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.alert = this.alert.bind(this)
  }

  handleUsername(name) {
    this.setState({ userLogin: name })
  }

  handlePassword(password) {
    this.setState({ userPassword: password })
  }

  alert() {
    alert(`Username: ${this.state.userLogin} Password: ${this.state.userPassword}`)
    // this.setState({ alert })
  }

  render() {
    return (
      <div>
        <input
          placeholder="Enter Username"
          type="text"
          onChange={event => this.handleUsername(event.target.value)}
        />
        <input
          placeholder="Enter Password"
          type="text"
          onChange={event => this.handlePassword(event.target.value)}
        />
        <button onClick={this.alert}>Submit</button>
      </div>
    )
  }
}

export default Login
