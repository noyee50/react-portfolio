import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="tes_con">
      <h3 className="tes_title">Testimonials</h3>
      <div className="tes_list">
        <div className="tes_item">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="https://images.unsplash.com/photo-1609233873389-8b9e1c20a616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByZXR0eSUyMHdvbWFufGVufDB8fDB8fHww" alt="" />
            <h4>Jon Do</h4>
            <p className="bio">Web Developer</p>
        </div>
        <div className="tes_item">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
            <img src="https://plus.unsplash.com/premium_photo-1669138512601-e3f00b684edc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByZXR0eSUyMHdvbWFufGVufDB8fDB8fHww" alt="" />
            <h4>Jon Do</h4>
            <p className="bio">Web Developer</p>
        </div>
        <div className="tes_item">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
            <img src="https://images.unsplash.com/photo-1595848426977-b5df510c4bab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByZXR0eSUyMHdvbWFufGVufDB8fDB8fHww" alt="" />
            <h4>Jon Do</h4>
            <p className="bio">Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
