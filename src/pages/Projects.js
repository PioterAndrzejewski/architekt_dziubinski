import React from "react";
import "../styles/Projects.css";
import ProjectIcon from "../components/ProjectIcon.js";

function Projects(props) {
  return (
    <div className="projects-container">
      {props.projects.map((project, index) => {
        return (
          <ProjectIcon key={index} projectInfo={project} lang={props.lang} />
        );
      })}
    </div>
  );
}

export default Projects;
