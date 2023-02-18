import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          Made with some{" "}
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
        <div className="footerCreator">
          @Piotr Andrzejewski,{" "}
          <a href="https://www.youtube.com/rzutoka">Rzut Oka</a>
        </div>
      </>
    );
  }
}

export default Footer;
