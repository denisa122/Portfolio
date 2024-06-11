import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';


// import experienceImg from '../../assets/waiting list desktop 1.jpg';
import githubIcon from '../../assets/githubIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import linkedinIcon from '../../assets/linkedinIcon.png';

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_58mpvcj', 'template_7o31bei', form.current, {
        publicKey: 'p2AnlP2BrFEr82RZO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
          form.current.reset();
          window.scrollTo(0, 0);
          setTimeout(() => setSubmitted(false), 5000);
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
                <input type='text' className='name' placeholder='Your Name' name='from_name'></input>
                <input type='email' className='email' placeholder='Your Email' name='reply_to'></input>
                <textarea className='message' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value='send' className='submitBtn'>Submit</button>
                {submitted && <div className="alert">Email sent!</div>}
                </form>
                <div className='links'>
                    <a href="https://www.linkedin.com/in/denisa-gabriela-neagu/" target="_blank" rel="noopener noreferrer">
                      <img src={linkedinIcon} alt="LinkedIn icon" className='link'/>
                    </a>
                    <a href="https://github.com/denisa122" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub icon" className='link'/> 
                    </a>
                    <a href="https://www.facebook.com/DenisaaaGabriela/" target="_blank" rel="noopener noreferrer">
                      <img src={facebookIcon} alt="Facebook icon" className='link'/>
                    </a>
                </div>
        </div>
    </section>
  )
}

export default Contact