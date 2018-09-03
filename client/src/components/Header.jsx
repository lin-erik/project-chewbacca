import React, { Component } from 'react'
import { Button, Sticky } from 'semantic-ui-react'
import TextTransition from 'react-text-transition'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Project',
      prevPos: 0,
      animateDir: 1
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleClick() {
    this.state.text === 'Project'
      ? this.setState({ text: 'P' })
      : this.setState({ text: 'Project' })
  }

  handleScroll() {
    const currPos = window.scrollY

    if (currPos > this.state.prevPos) {
      this.setState({ text: 'P', animateDir: 1, prevPos: currPos })
    } else {
      this.setState({ text: 'Project', animateDir: 0, prevPos: currPos })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div>
        <Sticky>
          <div style={{display:"flex"}}>
            <h1 style={{flexGrow:1}}> 
              <TextTransition
                delay={0}
                order={this.state.animateDir}
                spring={{ stiffness: 350, damping: 25 }}
                text={this.state.text}
              />
            </h1>
            <Link to="/upload">Submit your app</Link>
          </div>
        </Sticky>
      </div>
    )
  }
}

export default Header
