import React from 'react' 
export default class ProjectCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    this.state.dummy = {
      imageUrl: "https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/08/5b87e470023bc.jpg",
      }
  }

  render(){
    return(
      <div className="project-card" style={{width:'60vw', margin: "0 auto", backgroundColor:"white"}}>
        <div className="project-top-bar" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "8px"}}>
          <div className="author" style={{fontWeight:"bold"}}>thecodingjack</div>
          <div className="stack">M E A N</div>
        </div>
        <div className="project-img-container" style={{textAlign:"center"}}>
          <img src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/08/5b87e470023bc.jpg" style={{width:"60vw", backgroundSize:"cover", margin:"0 auto"}}/>
        </div>
        <div className="project-info">
          <div className="project-title">
            <h4>Awesome React App</h4>
          </div>
          <div className="project-description">
            <p>This is the best react app</p>
          </div>
        </div>
      </div>
    )
  }
}