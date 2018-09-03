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

        <div style={{ height: '1500px' }}>Test</div>
      </div>
    )
  }
}

export default App
