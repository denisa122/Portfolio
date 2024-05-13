import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './projectDescriptionPages.css';

const Projectmanager = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className='projectDetailsContainer'>
      <Link to='/' className='backLink'>Back to homepage</Link>
      <h1 className='projectTitle'>Project Management Application</h1>
      <p className='projectDescription'>
      Currently in development, this project management application is designed to enhance team productivity and project tracking. The application will allow users to create projects, assign tasks, and track progress, with a focus on user-friendly design and functionality. 
      The application will also include user authentication and authorization features to ensure data security and privacy. 
      </p> <br></br>
      <div className='projectDetails'>
        <div className='projectSpecificationsContainer'>
          <p className='projectContext'>
            <h3>Context: </h3> For this project, I opted for working individually rather than in a group, because I believe this will help me practice all the knowledge and skills that I earned throughout my education better, before joining the IT job market. 
            The requirements are to create a REST API for the backend, and for the frontend we are free to choose the framework or library that we want to use. I chose React.js, because I am interested in becoming more proficient in it. 
            The project has to be deployed on Render.com, and for this reason I created a pipeline that handles the deployment job, rather than deploying the application every time there is a new commit on GitHub.
          </p> <br></br>
          <p>
            <h3>GitHub repository: </h3> <a href='https://github.com/denisa122/ProjectManagementApp  ' className='projectRepoLink' target='_blank'>https://github.com/denisa122/ProjectManagementApp</a>
          </p> <br></br>
          <p>
            <h3>Version Control:</h3> Git is utilized for version control, with the project repository hosted on GitHub, providing collaboration and code management capabilities.
          </p> <br></br>
          <p>
            <h3>Database: </h3> MongoDB Atlas is used to store and manage user data, project information, and other relevant content.
          </p> <br></br>
          <p>
            <h3>Technologies Used: </h3> React.js, Node.js, Express.js, MongoDB, HTML, CSS, JavaScript
          </p> <br></br>
          <p>
            <h3>User Authentication: </h3> JWT (JSON Web Tokens) are used for user authentication, providing a secure way to transmit information between parties.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projectmanager