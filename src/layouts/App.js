import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Home from "../pages/Home.js";
import Projects from "../pages/Projects.js";
import Project from "../pages/Project.js";
import Mission from "../pages/Mission.js";
import Contact from "../pages/Contact.js";
import ErrorPage from "../pages/ErrorPage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
window.jQuery = window.$ = $;

class App extends React.Component {
  state = {
    currentLanguage: "0",
    projects: [
      {
        id: 0,
        sliderShow: true,
        link: "kawalerkawkrakowie",
        name: ["Kawalerka w Krakowie", "Studio in Krakow"],
        description: [
          "Projekt kawalerki w Krakowskiej dzielnicy Krowodrza na zlecenie właścicielki. Projekt zakłada minimalistyczne podejśce do wnętrza. Ważnym elementem programu funkcjonalnego była jak największa liczba schowków/szaf na życzenie właścicielki. Podział na strefy we wnętrzu jest umowny, jego granice zacierają się tworząc jedną wspólną przestrzeń na stosunkowo małej powierzchni.",
          "Design of a studio apartment in the Krakow district of Krowodrza on behalf of the owner. The project assumes a minimalist approach to the interior. An important element of the functional program was the largest possible number of lockers / wardrobes at the request of the owner. The division into zones in the interior is conventional, its boundaries blur, creating one common space in a relatively small area.",
        ],
        images: [
          "./images/projects/00_1.jpg",
          "./images/projects/00_2.jpg",
          "./images/projects/00_3.jpg",
          "./images/projects/00_4.jpg",
        ],
      },
      {
        id: 1,
        sliderShow: true,
        link: "biurow",
        name: ["Biuro w", "Office"],
        description: [
          "Główną myślą przewodnią opracowania projektu , było stworzenie optymalnych warunków do pracy dla pracowników, odpowiadających współczesnym standardom europejskich przestrzeni biurowych i laboratoryjnych.W  pomieszczeniach  przewidziano 6 stanowisk pracy dla pracowników etatowych , oraz możliwość prowadzenia spotkań dla osób z zewnątrz.W ramach przebudowy przewidziano prace związane z budową ścianek działowych, przebudową istniejących instalacji wentylacji mechanicznej i klimatyzacji , budową instalacji wod.- kan., w projektowanych  pomieszczeniach nie występują czynniki uciążliwe lub szkodliwe dla zdrowia.",
          "The main idea behind the development of the project was to create optimal working conditions for employees, corresponding to the modern standards of European office and laboratory spaces. There are 6 workstations for full-time employees in the rooms, and the possibility of holding meetings for people from outside. construction of partition walls, reconstruction of the existing mechanical ventilation and air-conditioning systems, construction of water and sewage systems, there are no nuisance or harmful factors in the designed rooms.",
        ],
        images: ["../images/projects/01_1.jpg", "../images/projects/01_2.jpg"],
      },
      {
        id: 2,
        sliderShow: false,
        link: "kamienicawkielcach",
        name: ["Kamienica w Kielcach", "Tenement in Kielce"],
        description: [
          "Opracowanie dokładnego stanu istniejącego kamienicy przy ul. Stefana Żeromskiego w Kielach.Była to część projektu budynku wielorodzinnego budowanego na działce obok. Będąca pod ochroną konserwatorską kamienica wymagała dokładnej ekspertyzy architektonicznej jak i konstruktorskiej. W uzgodnieniu z konserwatorem opracowanie zawiera detale jak i poszczególne elementy które stanowią artość historyczną oraz architektoniczną i podlegają ścisłej ochronie konserwatorskiej.",
          "Development of the exact condition of the existing tenement house at ul. Stefan Żeromski in Kielce, which was part of a multi-family building project being built on a plot next door. The tenement house, which was under conservation protection, required thorough architectural and construction expertise. In agreement with the conservator, the study contains details and individual elements that constitute historical and architectural value and are subject to strict conservation protection.",
        ],
        images: [
          "./images/projects/02_1.jpg",
          "./images/projects/02_2.jpg",
          "./images/projects/02_3.jpg",
          "./images/projects/02_4.jpg",
          "./images/projects/02_5.jpg",
          "./images/projects/02_6.jpg",
          "./images/projects/02_7.jpg",
        ],
      },
      {
        id: 3,
        sliderShow: false,
        link: "przedszkolewchinach",
        name: ["Przedszkole w Chinach", "Kindergarten in China"],
        description: ["Przedszkole takie no.", "Kindergarten such no."],
        images: [
          "./images/projects/03_1.jpg",
          "./images/projects/03_2.jpg",
          "./images/projects/03_3.jpg",
          "./images/projects/03_4.jpg",
          "./images/projects/03_5.jpg",
        ],
      },
      {
        id: 4,
        sliderShow: true,
        link: "mieszkanie",
        name: ["Mieszkanie Gdzieśtam", "Somewhere Else Apartament"],
        description: [
          "Obowiązkowym elementem rozbudowy było ulokowanie dźwigu osobowego którego brakowało w systemie komunikacyjnym obiektu. Winda została ulokowana na wschodniej elewacji w miejscu głównego wejścia do części hotelowej budynku. Lokalizacja została wybrana tak aby winda była w stanie obsłużyć również osoby niepełnosprawne. Jest dostępna z poziomu terenu i prowadzi nas wprost do lobby hotelu. Na wyższych kondygnacjach połączona jest bezpośrednio z korytarzem. Dobudowa windy jest jedyną ingerencją w strukturę kubatury budynku. Powodem takiego zabiegu jest chęć pozostawienia hotelu w jego pierwotnej formie i utrzymanie jego charakterystycznego dla tego miejsca stylu. Pokoje zostały przeprojektowane na poziomie funkcjinalnosci i designu nawiązujac do istniejącego stylu czyniąc hotel wyjątkowym miejscem. Projekt przbudowy hotelu prowadzi też do autonomiczności obiektu.",
          "An obligatory element of the extension was the placement of a passenger lift, which was missing from the communication system of the facility. The elevator is located on the eastern façade at the main entrance to the hotel part of the building. The location was chosen so that the elevator would also be able to serve disabled people. It is accessible from the ground level and leads us directly to the hotel lobby. On the upper floors it is directly connected to the corridor. The extension of the elevator is the only interference in the structure of the building's cubature. The reason for such an operation is the desire to leave the hotel in its original form and maintain its style characteristic of this place. The rooms have been redesigned in terms of functionality and design in line with the existing style, making the hotel a unique place. The hotel reconstruction project also leads to the autonomy of the facility.",
        ],
        images: [
          "./images/projects/04_1.jpg",
          "./images/projects/04_2.jpg",
          "./images/projects/04_3.jpg",
          "./images/projects/04_4.jpg",
        ],
      },
    ],
  };

  handleLanguageButton = () => {
    if (this.state.currentLanguage === "0") {
      this.setState({
        currentLanguage: "1",
      });
    } else {
      this.setState({
        currentLanguage: "0",
      });
    }
  };

  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Navigation
              currentLanguage={this.state.currentLanguage}
              navLinks={this.state.navLinks}
              handleLanguageButton={this.handleLanguageButton}
            />
          </header>
          <section>
            <Routes>
              <Route
                path="/"
                exact="true"
                element={
                  <Home
                    lang={this.state.currentLanguage}
                    projects={this.state.projects}
                  />
                }
              />
              <Route
                path="/projekty"
                exact="true"
                element={
                  <Projects
                    lang={this.state.currentLanguage}
                    projects={this.state.projects}
                  />
                }
              />
              <Route
                path="/onas"
                exact="true"
                element={<Mission lang={this.state.currentLanguage} />}
              />
              <Route path="/kontakt" exact="true" element={<Contact />} />
              {this.state.projects.map((project, index) => {
                return (
                  <Route
                    path={"/" + project.link}
                    exact="true"
                    element={
                      <Project
                        project={this.state.projects[index]}
                        lang={this.state.currentLanguage}
                      />
                    }
                    key={index}
                  />
                );
              })}
              <Route element={<ErrorPage />} />
            </Routes>
          </section>
          <footer>
            <Footer />
          </footer>
          <div className="scroll-top-icon">
            <FontAwesomeIcon icon={faArrowRight} onClick={scrollToTop} />
          </div>
        </div>
      </Router>
    );
  }
}

$(document).on("scroll", function () {
  const scrollValue = $(this).scrollTop();
  const $scrollTopIcon = $(".scroll-top-icon");
  console.log(scrollValue);
  if (scrollValue > 10) {
    $scrollTopIcon.addClass("scroll-top-icon-active");
  } else $scrollTopIcon.removeClass("scroll-top-icon-active");
});

const scrollToTop = function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
};

export default App;
