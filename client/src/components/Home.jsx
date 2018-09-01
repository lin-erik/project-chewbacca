import React, { Component } from 'react'
import ProjectCard from './ProjectCard.jsx';


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        Home Component
        <div>
          <ProjectCard/>
        </div>
      </div>
    )
  }
}

export default Home