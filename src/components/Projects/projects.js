import React from "react";
import { Link } from "react-router-dom";

import "./projects.css";

import Gallaria from "../../assets/gallaria.png";
import TerraTeas from "../../assets/terrateas.svg";
import CapWizards from "../../assets/capwizards.svg";
import ProjectManagementApplication from "../../assets/projectmanager.svg";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projectsTitle">My Portfolio</h2>
      <span className="projectsDescription">
        Welcome to my projects showcase! Here, you'll find a selection of my
        most significant web development endeavors.
      </span>
      <div className="allProjectsContainer">
        <div className="column">
          <div className="projectContainer projectCard">
            <img
              src={ProjectManagementApplication}
              alt="ProjectManagementApplication-logo"
              loading="lazy"
              className="projectImg"
              style={{ width: "280px", marginTop: "40px" }}
            />
            <p className="projectDescription">
              Currently in development, this project management application is
              designed to enhance team productivity and project tracking.
            </p>
            <Link to="/projectmanager" className="projectLink">
              <strong>Check it Out</strong>
            </Link>
          </div>
          
          <div className="projectContainer projectCard">
            <img
              src={Gallaria}
              alt="Gallaria-logo"
              loading="lazy"
              className="projectImg"
              style={{ width: "200px" }}
            />
            <p className="projectDescription">
              Gallaria is a dynamic and user-friendly image gallery application
              designed to showcase visual content seamlessly.
            </p>
            <Link to="/gallaria" className="projectLink">
              <strong>Check it Out</strong>
            </Link>
          </div>
        </div>

        <div className="column">
          <div className="projectContainer projectCard">
            <img
              src={TerraTeas}
              alt="TerraTeas-logo"
              loading="lazy"
              className="projectImg"
            />
            <p className="projectDescription">
              TerraTeas is an online tea shop that specializes in premium teas
              from around the world, emphasizing the rich stories and origins
              behind each selection.
            </p>
            <Link to="/terrateas" className="projectLink">
              <strong>Check it Out</strong>
            </Link>
          </div>

          <div className="projectContainer projectCard">
            <img
              src={CapWizards}
              alt="CapWizards-logo"
              loading="lazy"
              className="projectImg"
            />
            <p className="projectDescription">
              Cap Wizards is an eco-conscious web shop that offers a unique
              selection of recycled bottle caps, promoting sustainability.
            </p>
            <Link to="/capwizzards" className="projectLink">
              <strong>Check it Out</strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
