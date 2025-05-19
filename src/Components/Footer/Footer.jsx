import React from "react";
import "./Footer.css";
//import theme from "../../assets/theme.svg"
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-logo">
            <h1>PRATIK</h1>
            {/* <img src={theme} alt="" /> */}
          </div>
          <p>I'm a Frontend Developer from India</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt=''/>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">Copyright © 2025 Pratik Rout. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
            </div>       
        </div>
    </div>
  );
};

export default Footer;
