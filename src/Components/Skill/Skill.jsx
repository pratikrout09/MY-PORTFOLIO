import React from 'react'
import "./Skill.css"
import theme from "../../assets/theme.svg"
import Skill_data from '../../assets/Skill_data'
const Skill = () => {
  return (
    <div id='skill' className='skill'>
      <div className="skill-title">
        <h1>My Skills</h1>
        <img src={theme} alt=''/>
      </div>
      <div className="skill-container">
         {Skill_data.map((skill,index)=>{
            return <div className="skill-format" key={index}>
                {/* <img src={skill.skill_img} alt=''/> */}
                <h2>{skill.skill_head}</h2>
                <p>{skill.skill_name1}</p>
                <p>{skill.skill_name2}</p>
                <p>{skill.skill_name3}</p>
                <p>{skill.skill_name4}</p>
            </div>
         })}
      </div>
    </div>
  )
}

export default Skill
