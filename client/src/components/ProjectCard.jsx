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
      <article className="project-card" style={{marginBottom:"60px", border:"1px solid #e6e6e6", borderRadius:"3px", backgroundColor:"#fff"}}>
        <header className="project-top-bar" style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "16px", height:"60px"}}>
          <div className="avatar">
            <a href="#" style={{width:"30px", height:"30px", textDecoration:"none", cursor:"pointer",backgroundColor:"#fafafa", borderRadius:"50%", display:"block", overflow:"hidden"}}>
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={{height:"100%", width:"100%"}}>
              </img>
            </a>
          </div>
          <div className="author" style={{fontWeight:"bold", flexGrow:"1", marginLeft:"12px", flexShrink:"1"}}>thecodingjack</div>
          <div className="stack">M E A N</div>
        </header>
        {/* <div className="project-img-container" style={{position:"relative", overflow:"hidden", paddingBottom:"100%"}}> */}
        <div className="project-img-container" style={{overflow:"hidden", position:"relative", maxWidth:"600px", maxHeight:"600px"}}>
          {/* <img src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/08/5b87e470023bc.jpg" style={{width:"100%", left: 0, right: 0, position:"absolute"}}/> */}
          <img src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/08/5b87e470023bc.jpg" style={{backgroundSize:"cover", width:"100%", height:"100%"}}/>
          {/* <img src="https://www.portraitprofessional.com/img/homepage/header-image-2.jpg" style={{maxWidth:"100%", maxHeight:"100%", left: "50%", top: "50%", position:"absolute", transform: "translate(-50%,-50%)"}}/> */}
        </div>
        <div className="project-info" style={{padding:"0px 16px"}}>
          <div className="project-title" style={{marginBottom:"4px"}}>
            <h4>Awesome React App</h4>
          </div>
          <div className="project-description" style={{marginBottom:"4px"}}>
            <p>This is the best react app</p>
          </div>
        </div>
      </article>
    )
  }
}