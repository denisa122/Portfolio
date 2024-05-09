import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import ProjectPhoto from '../../assets/project.png'

import './projectDescriptionPages.css';

const Capwizzards = () => {
  return (
    <div className='projectDetailsContainer'>
      <Link to='/' className='backLink'>Back to homepage</Link>
      <h1 className='projectTitle'>Cap Wizards</h1>
      <p className='projectDescription'>
        Write description here
      </p> <br></br>
      <div className='projectDetails'>
        <div className='projectImgContainer'>
          <img
            src={ProjectPhoto}
            alt="Cap Wizards-screenshot"
            loading="lazy"
            className="projectImage"
          />
        </div>
        <div className='projectSpecificationsContainer'>
          <p className='projectContext'>
            <h3>Context: </h3> This project was created in collaboration with other 2 classmates, for our semester project. The requirements were to create a web shop using PHP as the programming language (we were not allowed to use any frameworks). 
            Our application had to include a front page containing “About us”, “Daily offers” and “News” sections (all of these loaded from the database), a recommendation system when the user is viewing one of the products, a contact form and an admin panel, where the admin user can edit or delete certain information or products.
            The user interface does not respect any design laws or principles in terms of the look and feel of it, but the goal of this project was to familiarize ourselves with PHP and build an application using this programming language, with a focus on the backend of it.
          </p> <br></br>
          <p>
            <h3>GitHub repository: </h3> <a href='https://github.com/denisa122/CapWizards ' className='projectRepoLink' target='_blank'>https://github.com/denisa122/CapWizards </a>
          </p> <br></br>
          <p>
            <h3>Version Control:</h3> Git was utilized for version control, with the project repository hosted on GitHub, providing collaboration and code management capabilities
          </p> <br></br>
          <p>
            <h3>Database: </h3> The application uses a MySQL database to store and manage user data, product information, and other relevant content
          </p> <br></br>
          <p>
            <h3>Technologies Used: </h3> PHP, MySQL, HTML, CSS, (JavaScript)?
          </p> <br></br>
          <p>
            <h3>User Authentication: </h3> ???
          </p>
        </div>
      </div>
    </div>
  )
}

export default Capwizzards