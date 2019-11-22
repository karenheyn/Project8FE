import React from "react";
import Washington from "../../assets/washington.jpg";
import "./About.css";
const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-title'>About</h1>
      <h5 className='about-text'>
        Welcome to DeliCious, the place for finding the best food in Washington
        D.C.
      </h5>
      <div className='wash'>
        <img
          className='img-abt'
          src={Washington}
          alt='washington monument'
        ></img>
      </div>
    </div>
  );
};

export default About;
