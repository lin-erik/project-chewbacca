import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Redirect, Switch } from 'react-router'


import Home from './Home.jsx'
import '../styles/css/main.css'
import Header from './Header.jsx'
import Upload from './Upload.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <div>
            <Switch>
              <Route path="/" exact render={()=>( 
                <Home/>
              )}/>
              <Route path="/upload" render={()=>(
                <Upload/>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
