import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import ProjectPhoto from '../../assets/project.png'

import './projectDescriptionPages.css';

const Gallaria = () => {
  return (
    <div className='projectDetailsContainer'>
      <Link to='/' className='backLink'>Back to homepage</Link>
      <h1 className='projectTitle'>Gallaria</h1>
      <p className='projectDescription'>
        Gallaria is a dynamic and user-friendly image gallery application designed to showcase visual content seamlessly. 
        It provides a sleek and intuitive interface for users to upload, organize, and browse through images effortlessly. 
      </p> <br></br>
      <div className='projectDetails'>
        <div className='projectImgContainer'>
          <img
            src={ProjectPhoto}
            alt="Gallaria-screenshot"
            loading="lazy"
            className="projectImage"
          />
        </div>
        <div className='projectSpecificationsContainer'>
          <p className='projectContext'>
            <h3>Context: </h3> This project was created in collaboration with 4 other classmates. The requirements were to create a desktop application and a website, which should be connected. 
            For the desktop application, we created a drawing tool meant for digital artists, where they can either create a new drawing or edit previous ones, and then upload them to the website to be “sold”. 
            We created a basic drawing tool from scratch instead of using a third-party library, in order to fulfill the requirements set by the school. 
            For the website, which serves as a “digital art gallery”, users can browse the available items and add them to the shopping cart, as well as being able to view their profile and previous orders.
          </p> <br></br>
          <p>
            <h3>GitHub repository: </h3> <a href='https://github.com/NXTsk/Gallaria' className='projectRepoLink' target='_blank'>https://github.com/NXTsk/Gallaria</a>
          </p> <br></br>
          <p>
            <h3>Version Control:</h3> Git was utilized for version control, with the project repository hosted on GitHub, providing collaboration and code management capabilities
          </p> <br></br>
          <p>
            <h3>Database: </h3> SQL database, MSSQL as relational database management system 
          </p> <br></br>
          <p>
            <h3>Technologies Used: </h3> C#, .NET, WPF, SQL, HTML, CSS, JavaScript, jQuery, Bootstrap
          </p> <br></br>
          <p>
            <h3>User Authentication: </h3> User authentication and authorization are implemented using JSON Web Tokens (JWT), ensuring secure access to user-specific content
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallaria