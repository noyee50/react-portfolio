import { useState } from 'react';
import style from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6';

function Navbar() {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = ()=>{
    setToggle(!isToggle)
  }

  return (
    <nav>
      <div className={style.container}>
        <div className={style.nav_con}>
            <div className={style.logo}>
                <a href="#"> RANGSAN .DEV &lt;/&gt;</a>
            </div>
            <ul className="">
                <li><a href="#" className="">Skill</a></li>
                <li><a href="#" className="">Portfolio</a></li>
                <li><a href="#" className="">Contact</a></li>
            </ul>
            <div className={style.button}>
                <a href="#" className="">Hire Me</a>
            </div>
        </div>

        <FaBars className={style.bar} onClick={handleToggle}/>
        {isToggle? (
          <>
            <ul className={style.mobile_menu}>
                <li><a href="#" className="">Skill</a></li>
                <li><a href="#" className="">Portfolio</a></li>
                <li><a href="#" className="">Contact</a></li>
            </ul>
            <div className={style.mobile_button}><a href="">Hire Me</a></div>
          </>
        ):null}

      </div>
    </nav>
  );
}

export default Navbar;
