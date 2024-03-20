import React from 'react';
import './projects.css';

import Portfolio1 from '../../assets/project.jpg';

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projectsTitle'>My Portfolio</h2>
        <span className='projectsDescription'>lciwnefewjkf wekfewjeqdkwho idhuewi fcweuikf cewifiusw ufewufwui sfeuiffef nbjcwe fewhh3oiefhiwehiw huuuuuuuuewfhuewifhuewidhewoihdqwdi fweiugfwehdhefhi</span>
        <div className='projectsImgs'>
            <img src={Portfolio1} alt="project cover photo" className='projectsImg'/>
            <img src={Portfolio1} alt="project cover photo" className='projectsImg'/>
            <img src={Portfolio1} alt="project cover photo" className='projectsImg'/>
            <img src={Portfolio1} alt="project cover photo" className='projectsImg'/>
            <img src={Portfolio1} alt="project cover photo" className='projectsImg'/>
            <img src={Portfolio1} alt="project cover photo" className='projectsImg'/>
        </div>
    </section>
  )
}

export default Projects