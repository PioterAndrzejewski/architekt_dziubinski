import React from "react";
import "../styles/Home.css";
import ImageSlider from "../components/ImageSlider2.js";

function Home(props) {
  return (
    <div className="home">
      <ImageSlider lang={props.lang} projects={props.projects} />
    </div>
  );
}

export default Home;
