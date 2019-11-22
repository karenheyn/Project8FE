import React from "react";
import Washington from "../../assets/washingtonimage.jpg";
import Washington2 from "../../assets/wash2pic.jpg";
import Washington3 from "../../assets/wash3pic.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="about-header-title">About</h1>
      <h1 className="about-header-subtitle">
        Helping you find the best restaurants in DC
      </h1>
      <div className="about-container">
        <h4 className="about-words-top">
          <span className="about-big-d">D</span>eli
          <span className="about-big-l">C</span>ious is here to help you find
          the best place to eat when you're in D.C. Are you from D.C. and trying
          to find a new place to have a nice meal? Look no further! Using
          DeliCious you can search through 100 different restaurants, anything
          from Japanese Sushi restaurants to Greek food!
        </h4>
        <div className="about-image-container">
          <img className="wash-image-one" src={Washington} />
        </div>
      </div>
      <div className="about-container">
        <div className="about-image-container-middle">
          <img className="wash-image-one" src={Washington2} />
        </div>
        <h4 className="about-words-top">
          We here at <span className="about-big-d">D</span>eli
          <span className="about-big-l">C</span>ious are dedicated to providing
          you with only the best restaurants, fast food spots, and food trucks.
        </h4>
      </div>
      <div className="about-container">
        <h4 className="about-words-top">
          If you've found your new hot spot let us know by leaving a review!
          Open up a restaurants page and scroll down to drop a hot review.
        </h4>
        <div className="about-image-container">
          <img className="wash-image-one" src={Washington3} />
        </div>
      </div>
    </div>
  );
};

export default About;
