import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className="hero_wrapper">
      <div className="container">
        <div className="hero_con">
          <div className="hero_info">
            <p className="text_1">Hi, It's me</p>
            <h3 className="text_2"> RANGSAN .DEV &lt;/&gt;</h3>
            <p className="text_3">
              <span>I'm a </span>
              <TypeAnimation
                sequence={[
                  "Full Stact Developer",
                  1000,
                  "Backend Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className="text_4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              fugiat commodi
              <br /> quas cupiditate minus dolore nulla eos accusantium labore
              explicabo.
              <br />
            </p>
            <ul className="hero_social">
              <li>
                <a href="#" className="">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className="hero_img"></div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
