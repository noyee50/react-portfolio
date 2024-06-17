import React from 'react'
import './Contact.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div className='con_wrap'>
      <div className="con_con">
        <div className="con_info">
            <h3>Get in touch</h3>
            <p className='con_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius eligendi in laboriosam delectus ipsum inventore alias dolorem ducimus aliquid.</p>
            <br/>
            <p className="con_ads">123 Main Street <br/> Bangkok, Thailand</p>
            <p><FaPhone /> (+66) 99 999 8877</p>
            <p><FaEnvelope /> support@site.com</p>
        </div>
        <div className="con_form">
            <form action="">
                <div className="input_group">
                    <div className="">
                        <label htmlFor="first name">First Name</label>
                        <input type="text" placeholder='eg. John' />
                    </div>
                    <div className="">
                        <label htmlFor="last name">Last Name</label>
                        <input type="text" placeholder='eg. John' />
                    </div>
                </div>
                <label htmlFor="email address">Email Addess</label>
                <input type="email" placeholder='e.g jonh@gmail.com'/>
                <label htmlFor="message">Your message</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Type Here'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
