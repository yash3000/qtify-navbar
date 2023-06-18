import React from "react";
import "./HeroCardComponent.css";
import heroImage from "../../assets/headphone-icon.png";

const HeroCardComponent = () => {
  return (
    <div className="HeroCardComponent">
      <h2 className="hero-content">
        100 Thousand Songs, ad-free <br/>
        Over thousands podcast episodes
      </h2>
      <img className="hero-image" src={heroImage} />
    </div>
  );
};

export default HeroCardComponent;
