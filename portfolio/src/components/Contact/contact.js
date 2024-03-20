import React from 'react';
import './contact.css';

// import experienceImg from '../../assets/waiting list desktop 1.jpg';
import githubIcon from '../../assets/githubIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import linkedinIcon from '../../assets/linkedinIcon.png';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='experience'>
            <h2 className='contactPageTitle'>Experience</h2>
            <p className='experienceDescription'>
                During my previous education,  I completed a 20-week long front-end development internship in the company Swap Language at
                the end of January 2023. This has been a very insightful experience and has allowed me to become a more
                well-rounded developer. During the internship, I was responsible for making changes to the already existing
                pages on the company’s platform, as well as implementing new front-end pages. I also worked on the
                implementation of the company’s custom UI components. I have gained knowledge of how to work within a
                microservices architecture using .NET 6 and technologies like Docker, Swagger API, Azure, Terraform, Blazor
                Server, C#, Tailwind CSS, JavaScript and so on – while also building on top of the knowledge related to web
                development that I had already gained from my studies.
            </p>
            {/* <div className='experienceImgs'>
                <img src={experienceImg} alt="experience img" className='experienceImg'/>
            </div> */}
        </div>
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