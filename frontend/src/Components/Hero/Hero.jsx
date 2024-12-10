import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <span>
          <h2>NEW ARRIVALS ONLY </h2>
          <img src={hand_icon} alt="" className="hero-hand-icon" />
        </span>

        <div>
          <p>New collections for everyone </p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img class="hero-right-image" src={hero_image} alt="" />
    </div>
  );
};

export default Hero;
