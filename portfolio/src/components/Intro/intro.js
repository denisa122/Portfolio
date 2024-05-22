import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';

import bg from '../../assets/heroimg4.png';
import me from '../../assets/me3.png';
import btnImg from '../../assets/hireImg.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Denisa</span> <br/> Web Development Student</span>
            <p className='introPara'>
            I'm eagerly seeking opportunities to apply my skills and contribute to innovative projects.
            Let's collaborate and build something amazing together!
            </p>
            <Link to="contact" smooth={true} duration={500} offset={-50} className='hireLink'>
              <button className='btn'>
                <img src={btnImg} alt="hire icon" className='btnImg'/>
                Hire me
              </button>
            </Link>
        </div>
        <img src={me} alt="" className='bg'/>
    </section>
  )
}

export default Intro