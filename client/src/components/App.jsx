import React, { Component } from 'react'
import Home from './Home.jsx'
import '../styles/css/main.css'
import Header from './Header.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Home/>
      </div>
    )
  }
}

export default App
