import React from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import mapImage from "../images/mapa.jpg";

class Contact extends React.Component {
  state = {
    state: 0,
  };

  render() {
    return (
      <div className="contact-container">
        <div className="map-container">
          <img src={mapImage} alt="mapa z lokalizacją pracowni" />
        </div>
        <div className="data-container">
          <div>Radosław Dziubiński Architektura</div>
          <div>
            <strong>Kopernia 60a, 28-400 Pińczów</strong>
          </div>
          <div>
            {" "}
            <span className="data-icon">
              <FontAwesomeIcon icon={faPhoneSquare} />
            </span>
            533 025 083
          </div>
          <div>
            {" "}
            <span className="data-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            biuro@drarch.pl
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
