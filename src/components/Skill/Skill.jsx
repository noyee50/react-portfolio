import React from 'react'
import './Skill.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNodeJs } from 'react-icons/fa6'

function Skill() {
  return (
    <div className='skill_con'>
      <h3 className="skill_title">My Skill</h3>
      <ul className="skill_list">
        <li className=""><FaSquareJs /></li>
        <li className=""><FaReact /></li>
        <li className=""><FaSass /></li>
        <li className=""><FaGitAlt /></li>
        <li className=""><FaNodeJs /></li>
      </ul>
    </div>
  )
}

export default Skill

