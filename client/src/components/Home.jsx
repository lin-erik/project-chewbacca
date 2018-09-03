import React, { Component } from 'react'
import ProjectCard from './ProjectCard.jsx';
import Feed from './Feed.jsx'


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <section style={{display: "flex", flexDirection: "column", flexGrow: 1, margin:"0 auto", maxWidth:"600px", width:"100%", position:"relative", paddingTop:"60px"}}>
        <div className="feeds-container"style={{display:"flex", flexDirection:"column"}}>
          {[...Array(10)].map(()=>(
            <ProjectCard/>
          ))}
          {/* <Feed/> */}
          {/* <ProjectCard/> */}
        </div>
      </section>
    )
  }
}

export default Home