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
    </section>
  )
}

export default Experience