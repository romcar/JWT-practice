import React, { Component } from 'react'
import Login from './Login/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Login/>
        Login
      </div>
    )
  }
}
