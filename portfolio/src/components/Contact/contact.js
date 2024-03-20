import React from 'react';
import './contact.css';

// import experienceImg from '../../assets/waiting list desktop 1.jpg';
import githubIcon from '../../assets/githubIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import linkedinIcon from '../../assets/linkedinIcon.png';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me</h2>
            <span className='contactDescription'>Please fill out the form below to discuss any collaboration opportunities.</span>
            <form action='' className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'></input>
                <input type='email' className='email' placeholder='Your Email'></input>
                <textarea className='message' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={githubIcon} alt="GitHub icon" className='link'/> 
                    <img src={facebookIcon} alt="Facebook icon" className='link'/>
                    <img src={linkedinIcon} alt="LinkedIn icon" className='link'/> 
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact