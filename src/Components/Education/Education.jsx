import React from 'react'
import "./Education.css"
import theme from "../../assets/theme.svg"
import  Education_data from '../../assets/Education_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Education = () => {
  return (
    <div id='education' className='education'>
      <div className="education-title">
        <h1>My Education</h1>
        <img src={theme} alt=''/>
      </div>
      <div className="education-container">
        {Education_data.map((education,index)=>{
            return(
                <div className="education-format" key={index}>
                <h2>{education.education_name}</h2>
                <h3>{education.education_year}</h3>
                <p>{education.education_institute}</p>
                <div className='education-more'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt=''/>
                </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Education
