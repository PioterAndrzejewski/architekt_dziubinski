import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectIcon.css";

function ProjectIcon(props) {
  return (
    <Link to={"/" + props.projectInfo.link} className="project-icon">
      <img
        src={props.projectInfo.images[0]}
        alt="obraz projektu"
        className="project-image"
      />
      <div className="project-image-description">
        {props.projectInfo.name[props.lang]}
      </div>
    </Link>
  );
}

export default ProjectIcon;
