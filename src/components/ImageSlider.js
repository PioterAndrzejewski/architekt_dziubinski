import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/ImageSlider.css";

function ImageSlider(props) {
  const [current, setCurrent] = useState(0);
  const sliderData = [];

  props.projects.map((project) => {
    if (project.sliderShow) {
      sliderData.push(project);
    }
  });
  const length = sliderData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  });

  useEffect(() => {
    const sliderTimer = setInterval(() => nextSlide(), 3000);
    return () => {
      clearInterval(sliderTimer);
    };
  }, [nextSlide]);

  if (!Array.isArray(sliderData) || sliderData.lenght <= 0) {
    return null;
  }

  return (
    <div className="image-slider">
      <div className="arrow-icon-left">
        <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} />
      </div>
      <div className="arrow-icon-right">
        <FontAwesomeIcon icon={faArrowRight} onClick={nextSlide} />
      </div>
      <div className="project-description">
        {sliderData[current].name[props.lang]}{" "}
        <Link to={"/" + sliderData[current].link}>
          <button>{props.lang === "0" ? "Zobacz Więcej!" : "See more!"}</button>
        </Link>
      </div>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.images[0]}
                alt="obraz projektu"
                className="gallery-image"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
