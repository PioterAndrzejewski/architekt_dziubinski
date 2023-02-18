import React from "react";
import "../styles/Project.css";

function Projects(props) {
  return (
    <div>
      <img
        src={props.project.images[0]}
        alt="obraz projektu"
        className="project-page-image-main"
      />
      <div className="project-page-container">
        <div className="project-page-name">
          <strong>{props.project.name[props.lang]}</strong>
        </div>
        <div className="project-page-description">
          {props.project.description[props.lang]}
        </div>
        {props.project.images.map((image, index) => {
          if (index > 0) {
            return (
              <img
                src={image}
                alt="obraz projektu"
                className="project-page-image"
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Projects;
