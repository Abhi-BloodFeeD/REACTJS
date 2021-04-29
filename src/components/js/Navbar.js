import React from 'react'
import '../css/Navbar.css'
const Navbar = ()=>{
  
  return(
    <div className="navbar">
      <ul className="nav">
        <li className="nav__li">About</li>
        <li className="nav__li">Home</li>
        <li className="nav__li">Achievements</li>
      </ul>
    </div>
  )
}

export default Navbar;