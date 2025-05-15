import React from 'react'
import "./Project.css"
import theme from "../../assets/theme.svg"
import Project_data from '../../assets/Project_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Project = () => {
  return (
    <div id='project' className='project'>
      <div className="project-title">
        <h1>My Projects</h1>
        <img src={theme} alt=''/>
      </div>
        <div className="project-container">
        {Project_data.map((project,index)=>{
            return <img key={index} src={project.p_img} alt=''/>
        })}
        </div>
        <div className="project-more">
            <p>Show More</p>
            <img src={arrow_icon} alt=''/>
        </div>
    </div>
  )
}

export default Project
