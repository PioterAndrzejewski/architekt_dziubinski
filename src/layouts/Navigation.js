import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
import logoImage from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
window.jQuery = window.$ = $;

class Navigation extends React.Component {
  state = {
    navLinks: {
      projects: ["projekty", "projects"],
      mission: ["o nas", "about"],
      contact: ["kontakt", "contact"],
      language: ["eng", "pl"],
    },
    hamburgerFlag: false,
  };

  toggleMenu = () => {
    if (this.state.hamburgerFlag === false) {
      this.setState({
        hamburgerFlag: true,
      });
    } else {
      this.setState({
        hamburgerFlag: false,
      });
    }
    toggleMenuJquery();
  };

  render() {
    return (
      <>
        <nav className="nav-mobile">
          <NavLink to="/" exact="true" className="navlogo-mobile">
            <img
              src={logoImage}
              alt="Architekt Dziubiński"
              onClick={this.toggleMenu}
            />
          </NavLink>
          <div className="mobile-nav-hamburger" onClick={this.toggleMenu}>
            {this.state.hamburgerFlag ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </nav>
        <nav className="nav-pc">
          <ul>
            <li className="logo">
              <NavLink
                to="/"
                exact="true"
                className="navlogo"
                onClick={this.toggleMenu}
              >
                <img src={logoImage} alt="Architekt Dziubiński" />
              </NavLink>
              <div className="empty-space"></div>
            </li>
            <li>
              <NavLink
                to="/"
                exact="true"
                className="navtext mobile-nav"
                onClick={this.toggleMenu}
              >
                {this.props.currentLanguage === "0" ? "Strona główna" : "Home"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projekty"
                className="navtext"
                onClick={this.toggleMenu}
              >
                {this.state.navLinks.projects[this.props.currentLanguage]}
              </NavLink>
            </li>
            <li>
              <NavLink to="/onas" className="navtext" onClick={this.toggleMenu}>
                {this.state.navLinks.mission[this.props.currentLanguage]}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontakt"
                className="navtext"
                onClick={this.toggleMenu}
              >
                {this.state.navLinks.contact[this.props.currentLanguage]}
              </NavLink>
            </li>
            <li>
              <button
                className="navtext"
                onClick={this.props.handleLanguageButton}
              >
                {this.state.navLinks.language[this.props.currentLanguage]}
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

const toggleMenuJquery = function () {
  $(".nav-pc").toggleClass("show");
};
export default Navigation;
