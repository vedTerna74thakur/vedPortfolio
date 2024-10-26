import React from "react";
import projectsData from "../assets/projectsData.json";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Tools Used: {project.tools}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
