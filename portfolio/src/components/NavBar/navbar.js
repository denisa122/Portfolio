import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';

import logo from '../../assets/Denisa - Gabriela Neagulogo.svg';
import contactImg from '../../assets/contactImg.png'

const Navbar = () => {
  return (
   <nav className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt="contact icon" className='desktopMenuImg'/>Contact me
        </button>
   </nav>
  )
}

export default Navbar