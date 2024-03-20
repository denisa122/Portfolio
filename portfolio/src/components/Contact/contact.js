import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';


// import experienceImg from '../../assets/waiting list desktop 1.jpg';
import githubIcon from '../../assets/githubIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import linkedinIcon from '../../assets/linkedinIcon.png';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_58mpvcj', 'template_7o31bei', form.current, {
        publicKey: 'p2AnlP2BrFEr82RZO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // e.target.reset;
          alert('Email sent!');
        }, (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me</h2>
            <span className='contactDescription'>Please fill out the form below to discuss any collaboration opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='user_name'></input>
                <input type='email' className='email' placeholder='Your Email' name='user_email'></input>
                <textarea className='message' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value='send' className='submitBtn'>Submit</button>
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