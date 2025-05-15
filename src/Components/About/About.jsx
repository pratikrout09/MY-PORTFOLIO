import React from "react";
import "./About.css";
import theme from "../../assets/theme.svg";
import profile_img from "../../assets/pratik1.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a skilled Web Developer.My passion lies in creating
              captivating website designs and implementing them through Frontend
              Development.I take pride in staying up-to-date with current trends
              and technologies to deliver the best results.I have developed a
              user-friendly Website. I believe that a well designed website
              should not only look visually appealing but also provide a smooth
              and enjoyable interaction for visitors.When starting a new project
              ,I throughly reserch and analyze.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"30%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years Of Experience</p>
        </div>
        <hr/>
         <div className="about-achievement">
            <h1>90+</h1>
            <p>Projects Completed</p>
        </div>
        <hr/>
         <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
