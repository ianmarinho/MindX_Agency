import React from "react";
import styles from './features.css';

// Componente que exibe as características dos serviços
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        {/* Título da seção */}
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Descrição</h2>
        </div>
        <div className="row">
          {/* Verifica se há dados e mapeia para exibição */}
          {props.data
            ? props.data.map((d, i) => (
              // Cada item é exibido em uma coluna
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                {/* Ícone */}
                <i className={d.icon}></i>
                {/* Título */}
                <h3>{d.title}</h3>
                {/* Texto de descrição */}
                <p>{d.text}</p>
              </div>
            ))
            : "Loading..."} {/* Mensagem de carregamento */}
        </div>
      </div>
    </div>
  );
};
