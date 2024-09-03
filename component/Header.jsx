import React, { useEffect, useState } from 'react'
import IMG from '../imgas/sob.png'
import { IoSearch } from "react-icons/io5";


function Header() {
  const [toggle,setToggle] = useState(false)
  const [navtoogle ,navsetToggle] = useState(false)
 
  const [activeDropdown, setActiveDropdown] = useState(null);

 function moddleFun(){
  navsetToggle(!navtoogle)
 }
  function toogleBar(index){
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index); 
    }
     }

   return (
    <div>
      <header>
        <div className='container'>
          <nav>
          <div>
            <img src={IMG} className='logo'  alt="img-logo"/>
          </div>
          <a href='#' className='bars' onClick={() => setToggle(!toggle)}>
            <i className={toggle === false ? "fa fa-bars active" : "fa fa-remove"}></i>
          </a>
            <ul className={`sub-menu ${toggle ? "active" : ""}`}>
              <li><a href='#'>about us</a></li>
              <li className='dropdown'><a href='#'>our team</a>
              <i class="fa-solid fa-chevron-down" onClick={() => toogleBar(1)}></i>
              <ul className={`drop-down ${activeDropdown === 1 ? "open" : ""}`}>
                <li><a href='#'>our team</a></li>
                <li><a href='#'>board</a></li>
              </ul>
              </li>
              <li><a href='#'>events</a></li>
              <li className='dropdown'><a href='#'>resources</a>
              <i class="fa-solid fa-chevron-down" onClick={() => toogleBar(2)}></i>
            
               <ul className={`drop-down ${activeDropdown === 2 ? "open" : ""}`}>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Press Release</a></li>
                <li><a href="#">Hand-Outs</a></li>
                <li><a href='#'>Calender</a></li>
               </ul>
              </li>
              <li><a href='#'>Government Compliance</a></li>
              <li className='dropdown'><a href='#'>Join Us</a>
              <i class="fa-solid fa-chevron-down" onClick={() => toogleBar(3)}></i>
              <ul className={`drop-down ${activeDropdown === 3 ? "open" : ""}`}>
                <li><a href='#'>donate</a></li>
                <li><a href='#'>Registration</a></li>

              </ul>
            </li>
              <li><a href='#'>blog</a> </li>
              <li><a href='#'><IoSearch onClick={() =>moddleFun()}/></a></li>
            </ul>
          </nav>
        </div>
        <div className={`moddle ${navtoogle ? "active" : "" }`}>
           <i className='fa fa-remove' onClick={() => navsetToggle(false)} ></i>
          <div className='moddle-menu'>
            <input type='text' placeholder='Search on site'/>
          </div>
        </div>
  
      </header>
    </div>

  )
}

export default Header