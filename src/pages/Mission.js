import React from "react";
import "../styles/Mission.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Mission(props) {
  return (
    <div>
      <div className="main-image-container">
        {/* <img
          src={"./images/mission/misja1.jpg"}
          alt="architekt rysujący rzut architektoniczny"
          className="main-image"
        /> */}
      </div>
      <div className="mission-container">
        <div className="mission-circles">
          <div className="mission-circle">
            <img
              src={"./images/mission/architecture.png"}
              alt="Zdjęcie ręki architekta rysującego na rzucie"
            />
            <div className="mission-circle-title">
              {props.lang === "0" ? `Architektura` : `Architecture`}
            </div>
            <div className="mission-circle-text">
              {props.lang === "0"
                ? `Projektujemy architekturę na każdym etapie inwestycji. Przygotujemy
            dla Ciebie projekt koncepcyjny, projekt budowlany, projekt
            przetargowy, projekt wykonawczy i przeprowadzimy nadzór autorski nad
            swoimi projektami. W razie potrzeby przeprowadzimy Cię przez cały
            proces budowlany od zaprogramowania inwestycji do wniesienia
            ostatnich mebli dbając o Twój komfort, bezpieczeństwo i wysoką
            jakość powstałej architektury.`
                : `We design architecture at every stage of the investment. We will prepare a conceptual design, construction design, tender design, detailed design for you and we will carry out author's supervision over your designs. If necessary, we will guide you through the entire construction process, from programming the investment to bringing in the last furniture, taking care of your comfort, safety and high quality of the resulting architecture.`}
            </div>
          </div>
          <div className="mission-circle">
            <img
              src={"./images/mission/interior.png"}
              alt="Logo architektury wnęrz"
            />
            <div className="mission-circle-title">
              {props.lang === "0" ? `Wnętrza` : `Interiors`}
            </div>
            <div className="mission-circle-text">
              {props.lang === "0"
                ? `Zajmujemy się kompleksowym projektowaniem wnętrz różnego rodzaju.
            Mamy doświadczenie w projektowaniu wnętrz mieszkalnych i biurowych
            dla klientów prywatnych i biznesowych. Projektując wnętrza nadążamy
            za światowymi trendami i zadowalamy każdego klienta. Z założenia
            stąpamy twardo po ziemi, więc nie tworzymy niemożliwych do
            zrealizowania wizji.`
                : `We deal with comprehensive interior design of various types. We have experience in designing residential and office interiors for private and business clients. When designing interiors, we follow global trends and satisfy every client. By design, we keep our feet firmly on the ground, so we do not create impossible visions.`}
            </div>
          </div>
          <div className="mission-circle">
            <img
              src={"./images/mission/consultancy.png"}
              alt="Ikona współpracy architekta z klientem"
            />
            <div className="mission-circle-title">
              {props.lang === "0" ? "Doradztwo" : "Consultancy"}
            </div>
            <div className="mission-circle-text">
              {props.lang === "0"
                ? `Masz na oku działkę i zastanawiasz się czy będziesz mógł na niej
            zbudować wymarzony dom? A może poszukujesz mieszkania pod wynajem? W
            tych i innych przypadkach przeanalizujemy dla Ciebie nieruchomości,
            rynek i podpowiemy kierunek, który należy obrać. Każde zadanie
            traktujemy jak wyzwanie dokładając wszelkich starań żeby efekty
            pracy z klientem były jak najlepsze. Mamy swoich specjalistów, ekipy
            wykonawcze, branżystów i współpracujemy z nimi żeby pomóc Tobie i
            dostarczać wysokiej jakości architekturę.`
                : `You have an eye on the plot and you are wondering if you will be able to build your dream house on it? Or maybe you are looking for a flat for rent? In these and other cases, we will analyze the real estate and the market for you and suggest the direction to be taken. We treat each task as a challenge, making every effort to ensure that the results of work with the client are the best. We have our specialists, construction teams, industry specialists and we work with them to help you and deliver high-quality architecture.`}
            </div>
          </div>
        </div>
        <div className="mission-slogan">
          {props.lang === "0"
            ? `Umówmy się na spotkanie - Jesteśmy ciekawi Twojego projektu i jak możemy
        Cię wesprzeć!`
            : `Let's make an appointment, we are curious about your project and how we can support you.`}
        </div>
        <ul className="mission-points">
          <li>
            <FontAwesomeIcon icon={faCircle} />
            {props.lang === "0"
              ? `Kompleksowe projekty od koncepcji po nadzory autorskie. Współpracujemy
          z różnymi specjalistami żeby dostarczać architekturę na światowym
          poziomie. Przeprowadzimy Cię przez wszystkie etapy uzyskiwania
          pozwoleń administracyjnych kompleksowo zajmując się wszystkimi
          uzgodnieniami.`
              : `Comprehensive projects from concept to author's supervision. We work with various specialists to deliver world-class architecture. We will guide you through all stages of obtaining administrative permits, comprehensively dealing with all arrangements.`}
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} />
            {props.lang === "0"
              ? `Projektujemy wnętrza, domy, biura i obiekty użyteczności publicznej.
          Do każdego zadania podchodzimy indywidualnie i z wielkim zapałem, bo
          architektura to nasza pasja.`
              : `We design interiors, houses, offices and public utility facilities. We approach each task individually and with great enthusiasm, because architecture is our passion.`}
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} />
            {props.lang === "0"
              ? `Jesteśmy profesjonalistami. Architektura to nasza pasja którą
          zajmujemy się od lat. Rzetelnie przygotujemy dla Ciebie ofertę z
          niezbędnymi informacjami i jasno określonymi zasadami współpracy. Na
          każdym etapie będziesz mieć pełny wgląd w efekty naszej pracy.`
              : `We are professionals. Architecture is our passion which we have been dealing with for years. We will diligently prepare an offer for you with the necessary information and clearly defined terms of cooperation. At each stage, you will have full insight into the effects of our work.`}
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} />
            {props.lang === "0"
              ? `Współpracujemy z dostawcami mebli i materiałów budowlanych zapewniając
          rabaty dla naszych klientów.`
              : `We work with suppliers of furniture and construction materials, providing discounts for our clients.`}
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} />
            {props.lang === "0"
              ? `Dzięki profesjonalnemu podejściu, sprawnej koordynacji i unikaniu
          błędów, zaoszczędzisz na naszym projekcie podczas budowy.`
              : `Thanks to a professional approach, efficient coordination and avoiding mistakes, you will save on our project during construction.`}
          </li>
        </ul>
        <div className="mission-architect">
          <img
            src={"./images/mission/radek.jpeg"}
            alt="architekt układający model"
            className="mission-architect-image"
          />
          <div className="mission-architect-description">
            <div className="mission-architect-main">
              Architekt Radosław Dziubiński
            </div>
            <div className="mission-architect-text">
              {props.lang === "0"
                ? `Założyciel pracowni i główny projektant. Od 2015 roku współpracuje z
            renomowanymi architektami i pracowniami z Krakowa, Warszawy, Gliwic
            i Katowic. Czuwa nad najwyższą jakością projektów i oryginalnością
            projektów, które odpowiadają na wyzwania współczesnej architektury
            tworząc inteligentne i ekologiczne rozwiązania.`
                : `The founder of the studio and the main designer. Since 2015, he has been cooperating with renowned architects and studios from Krakow, Warsaw, Gliwice and Katowice. He watches over the highest quality of projects and the originality of projects that respond to the challenges of modern architecture by creating intelligent and ecological solutions.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
