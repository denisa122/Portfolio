import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import ProjectPhoto from '../../assets/project.png'

import './projectDescriptionPages.css';

const Terrateas = () => {
  return (
    <div className='projectDetailsContainer'>
      <Link to='/' className='backLink'>Back to homepage</Link>
      <h1 className='projectTitle'>TerraTeas</h1>
      <p className='projectDescription'>
        TerraTeas is an online tea shop that specializes in premium teas from around the world, emphasizing the rich stories and origins behind each selection.
        The website prototype is designed to provide a seamless and engaging shopping experience, with a focus on user-friendly navigation and visually appealing product displays.
      </p> <br></br>
      <div className='projectDetails'>
        <div className='projectImgContainer'>
          <img
            src={ProjectPhoto}
            alt="TerraTeas-screenshot"
            loading="lazy"
            className="projectImage"
          />
        </div>
        <div className='projectSpecificationsContainer'>
          <p className='projectContext'>
            <h3>Context: </h3> This project was created in collaboration with 2 other classmates, for our UX/UI course. 
            The requirements were to create a prototype for a web shop, applying the theoretical concepts that we had learned about during the semester 
            (such as US Research, Heuristic Evaluation, Interaction Design Principles, Designing for touch enabled devices, etc.). 
          </p> <br></br>
          <p>
            <h3>Prototype link: </h3> <a href='https://www.figma.com/proto/hvMi0toalhBV8QkCVDndsu/Tea-website-wireframes?page-id=75%3A536&type=design&node-id=88-495&viewport=413%2C358%2C0.09&t=nw2gbm4zepE6MRRx-1&scaling=scale-down&starting-point-node-id=88%3A495&mode=design' className='projectRepoLink' target='_blank'>Link to Figma prototype</a>
          </p> <br></br>
          <p>
            <h3>Tools Used: </h3> Figma
          </p> <br></br>
          <p>
            <h3>End Result: </h3> The prototype showcases the main features of the website, including the homepage, product pages and shopping cart. 
            Our goal was to include as many typical mobile gestures as possible (example: tap, lateral and vertical scroll, slide, etc.) and simulate certain actions that a user performs on a mobile device (for example: swiping from the left side of the screen to go back to the previous page).
            The feeling that the prototype conveys is that of a clean and easy-to-use website, with a focus on the products themselves. 
            The choice of colors and typography was made to reflect the premium quality of the products and create a sense of calmness and relaxation, which is often associated with drinking tea.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terrateas