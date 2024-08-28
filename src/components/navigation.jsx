import React from "react";
import styles from './Navigation.css';

export const Navigation = () => {
  // Função para rolar suavemente até a seção especificada
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav id="menu" className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* Logo */}
          <a
            className="navbar-brand page-scroll"
            onClick={() => scrollToSection("page-top")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="/img/Logo.png"
              alt="Logo da MindX Agency"
              style={{ height: '250px' }}
            />
          </a>
        </div>

        {/* Links de navegação */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                onClick={() => scrollToSection("features")}
                style={{ cursor: "pointer" }}
              >
                Características
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                style={{ cursor: "pointer" }}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("services")}
                style={{ cursor: "pointer" }}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("testimonials")}
                style={{ cursor: "pointer" }}
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("team")}
                style={{ cursor: "pointer" }}
              >
                Equipe
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contact")}
                style={{ cursor: "pointer" }}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
