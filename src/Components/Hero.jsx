import React , { useEffect } from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import AOS from 'aos'
import "aos/dist/aos.css"
export const Hero = () => {

  useEffect(() =>{
    AOS.init();
  
  })
  return (
    <div className="hero">
      <div className="row">
     
          <h2 data-aos="fade-right" data-aos-duration="1700">NEW ARRIWALS ONLY</h2>
      

        <div className="hero-hand-icon">
          <p data-aos="flip-right" data-aos-duration="1700">
            new
            <img src={hand_icon} alt="hand-icon"/>
            <br />
            collection
            <br />
            for everyone
          </p>
        </div>
        <div className="hero-lates-btn" data-aos="flip-left" data-aos-duration="1700">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow-icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero-img" />
      </div>
    </div>
  );
};
