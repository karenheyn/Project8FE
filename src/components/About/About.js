import React from "react";
import Washington from "../../assets/washingtonimage.jpg";
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
          <span className="about-big-d">D</span>e
          <span className="about-big-l">L</span>icious is here to help you find
          the best place to eat when you're in D.C. Are you from D.C. and trying
          to find a new place to have a nice meal? Look no further! Using
          DeLicious you can search through 100 different restaurants, anything
          from Japanese Sushi restaurants to Greek food!
        </h4>
        <div className="about-image-container">
          <img className="wash-image-one" src={Washington} />
        </div>
      </div>
      <div className="about-container">
        <div className="about-image-container-middle">
          <img className="wash-image-one" src={Washington} />
        </div>
        <h4 className="about-words-top">
          <span className="about-big-d">D</span>e
          <span className="about-big-l">L</span>icious is here to help you find
          the best place to eat when you're in D.C. Are you from D.C. and trying
          to find a new place to have a nice meal? Look no further! Using
          DeLicious you can search through 100 different restaurants, anything
          from Japanese Sushi restaurants to Greek food!
        </h4>
      </div>
      <div className="about-container">
        <h4 className="about-words-top">
          <span className="about-big-d">D</span>e
          <span className="about-big-l">L</span>icious is here to help you find
          the best place to eat when you're in D.C. Are you from D.C. and trying
          to find a new place to have a nice meal? Look no further! Using
          DeLicious you can search through 100 different restaurants, anything
          from Japanese Sushi restaurants to Greek food!
        </h4>
        <div className="about-image-container">
          <img className="wash-image-one" src={Washington} />
        </div>
      </div>
    </div>
  );
};

export default About;
