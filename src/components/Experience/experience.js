import React from 'react';
import './experience.css';

// import experienceImg from '../../assets/waiting list desktop 1.jpg';

const Experience = () => {
  return (
    <section id='experience'>
        <div className='experience'>
            <h2 className='contactPageTitle'>Experience</h2>
            <p className='experienceDescription'>
                During my previous education,  I completed a 20-week long front-end development internship in the company Swap Language at
                the end of January 2023. During the internship, I was responsible for making changes to the already existing
                pages on the company’s platform, as well as implementing new front-end pages. I also worked on the
                implementation of the company’s custom UI components. I have gained knowledge of how to work within a
                microservices and micro frontends architecture using .NET 6 and technologies like Docker, Swagger API, Azure, Terraform, Blazor
                Server, C#, Tailwind CSS, JavaScript and so on.
            </p>
            {/* <div className='experienceImgs'>
                <img src={experienceImg} alt="experience img" className='experienceImg'/>
            </div> */}
        </div>
    </section>
  )
}

export default Experience