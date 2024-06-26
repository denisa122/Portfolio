import React, { useState } from 'react';
import {Link} from 'react-scroll';
import './navbar.css';


import logo from '../../assets/Denisa Neagulogo.svg';
import contactImg from '../../assets/contactImg.png';
import menu from '../../assets/burgernav.png';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
   <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' onClick={scrollToTop}/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Experience</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          const contactElement = document.getElementById('contact');
          if (contactElement) {
            if (contactElement) {
        const offset = contactElement.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
        }
        }}>
            <img src={contactImg} alt="contact icon" className='desktopMenuImg'/>Contact me
        </button>

        <img src={menu} alt="menu" className='mobileMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
   </nav>
  )
}

export default Navbar