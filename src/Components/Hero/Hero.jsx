import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/pratik1.png";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Pratik Rout,</span> Frontend Developer In India</h1>
      <p>
        I'm a skilled Web Developer.My passion lies in creating captivating
        website designs and implementing them through Frontend Development.I
        take pride in staying up-to-date with current trends and technologies to
        deliver the best results.
        {/* I have developed a user-friendly Website. I
        believe that a well designed website should not only look visually
        appealing but also provide a smooth and enjoyable interaction for
        visitors.When starting a new project ,I throughly reserch and analyze. */}
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
