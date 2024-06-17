import React from "react";
import "./Service.css";
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Service() {
  return (
    <div className="service_con">
      <h3 className="service_title">My Services</h3>
      <div className="service_list">
        <div className="service_item">
          <FaCode />
          <h4>Web Developer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae enim consectetur sapiente necessitatibus neque eos ipsa
            ullam minima nulla.
          </p>
        </div>
        <div className="service_item">
          <FaPaintbrush />
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae enim consectetur sapiente necessitatibus neque eos ipsa
            ullam minima nulla.
          </p>
        </div>
        <div className="service_item">
          <FaDesktop />
          <h4>Front-end Consulting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae enim consectetur sapiente necessitatibus neque eos ipsa
            ullam minima nulla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
