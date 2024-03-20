import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';

import bg from '../../assets/heroimg4.png';
import btnImg from '../../assets/hireImg.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Denisa</span> <br/> Web Development Student</span>
            <p className='introPara'>
                Think about text to put here
            </p>
            <Link><button className='btn'><img src={btnImg} alt="hire icon" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
  )
}

export default Intro